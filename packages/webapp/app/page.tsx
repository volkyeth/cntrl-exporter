import { Exporter } from "@/app/Exporter";
import accountSettings from "./1-account-settings.png";
import devMode from "./2-dev-mode.png";
import apiUrl from "./3-api-url.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="font-bold text-4xl">Cntrl exporter</h1>
        <Exporter />
        <h2 className="font-bold text-2xl">Instructions</h2>

        <ol className="flex flex-col gap-6 list-decimal">
          <li>
            Go to account settings on your{" "}
            <Button variant={"link"} className="inline text-base p-0" asChild>
              <a
                href="https://app.cntrl.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cntrl.site project
              </a>
            </Button>
            <Image
              src={accountSettings}
              className="mt-2"
              alt="Opening account settings"
            />
          </li>
          <li>
            Enable &quot;Dev mode&quot;
            <Image src={devMode} className="mt-2" alt="Enabling Dev mode" />
          </li>
          <li>
            Go to the Dev tab and copy your Api Url
            <Image src={apiUrl} className="mt-2" alt="Copying api Url" />
          </li>
          <li>
            Paste your Api Url above and click &quot;Export&quot;. Don&apos;t
            worry, this is a read-only api used to fetch your page&apos;s
            content and we don&apos;t store it anywhere.
          </li>
          <li>Wait for the export, download and extract the zip file.</li>
          <li>
            Go to{" "}
            <Button variant={"link"} className="inline text-base p-0" asChild>
              <a
                href="https://pinit.eth.limo"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pinit.eth.limo
              </a>
            </Button>
            , select &quot;Folder&quot; on &quot;Deploy from Browser&quot; and
            provide the <strong>_static</strong> folder extracted in the
            previous step.
          </li>
          <li>
            Wait for the upload. You should get a .eth.limo link for your
            website
          </li>
          <li>
            If you wish to set up the IPFS deployment with an ENS domain you
            own, connect your wallet, then click on &quot;Bind an Ethereum
            Domain&quot; and follow the instructions
          </li>
        </ol>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
