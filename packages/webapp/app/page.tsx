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

        <ol>
          <li>
            1. Go to account settings on your{" "}
            <Button variant={"link"} className="inline text-base p-0" asChild>
              <a
                href="https://app.cntrl.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cntrl.site project
              </a>
            </Button>
            <Image src={accountSettings} alt="Opening account settings" />
          </li>
          <li>
            2. Enable "Dev mode"
            <Image src={devMode} alt="Enabling Dev mode" />
          </li>
          <li>
            3. Go to the Dev tab and copy your Api Url
            <Image src={apiUrl} alt="Copying api Url" />
          </li>
          <li>
            4. Paste your Api Url above and click "Export". Don't worry, this is
            a read-only api used to fetch your page's content and we don't store
            it anywhere.
          </li>
          <li>5. Wait for the export, download and extract the zip file.</li>
          <li>
            6. Go to{" "}
            <Button variant={"link"} className="inline text-base p-0" asChild>
              <a
                href="https://pinit.eth.limo"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pinit.eth.limo
              </a>
            </Button>
            , select "Folder" on "Deploy from Browser" and provide the{" "}
            <strong>_static</strong> folder extracted in the previous step.
          </li>
          <li>
            7. Wait for the upload. You should get a .eth.limo link for your
            website
          </li>
          <li>
            8. If you wish to set up the IPFS deployment with an ENS domain you
            own, connect your wallet, then click on "Bind an Ethereum Domain"
            and follow the instructions
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
