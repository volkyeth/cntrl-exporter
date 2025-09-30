import { serve } from '@hono/node-server';
import { Storage } from '@google-cloud/storage';
import { Hono } from 'hono';
import { execSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const app = new Hono();

const bucketName = process.env.GCS_BUCKET_NAME;

if (!bucketName) {
    throw new Error('GCS_BUCKET_NAME environment variable is not set.');
}

// The Storage client will automatically find and use credentials
// from the environment (via Application Default Credentials).
// For local development, set the GOOGLE_APPLICATION_CREDENTIALS
// environment variable to the path of your JSON key file.
// On Cloud Run, it will automatically use the service's service account.
const storage = new Storage();

app.post('/build', async (c) => {
    const { apiKey } = await c.req.json<{ apiKey: string }>();
    if (!apiKey) {
        return c.text('API Key is required.', 400);
    }

    const buildDir = '/cntrl-template'

    try {
        console.log('Starting build...');
        execSync(`CNTRL_API_URL=${apiKey} npm run build -- --no-lint`, { stdio: 'inherit', cwd: buildDir });

        const outputDir = '_static';
        const zipName = `build-${Date.now()}.zip`;
        const zipPath = join(tmpdir(), zipName);
        execSync(`zip -r ${zipPath} ./${outputDir}`, { stdio: 'inherit', cwd: buildDir });

        await storage.bucket(bucketName).upload(zipPath);
        console.log(`${zipName} uploaded to ${bucketName}.`);
        rmSync(zipPath, { force: true }); // Clean up the local zip file

        const [url] = await storage.bucket(bucketName).file(zipName).getSignedUrl({
            version: 'v4' as const,
            action: 'read' as const,
            expires: Date.now() + 24 * 60 * 60 * 1000, // 1 day
        });

        return c.json({ downloadUrl: url });
    } catch (error) {
        console.error('Build failed:', error);
        return c.text('Build failed.', 500);
    }
});

const port = Number(process.env.PORT) || 8080;
console.log(`Build server listening on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});