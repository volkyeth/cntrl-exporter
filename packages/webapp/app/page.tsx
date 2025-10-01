import { Exporter } from "@/app/Exporter";
import accountSettings from "./1-account-settings.png";
import devMode from "./2-dev-mode.png";
import apiUrl from "./3-api-url.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import githubIcon from "./github.svg";
import volkyPfp from "./volky.svg";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <header className="w-full p-6 flex justify-between">
        <h1 className="font-bold text-4xl">Cntrl.zip</h1>
        <div className="flex gap-4 items-center justify-center">
          <a target="_blank" href="https://github.com/volkyeth/cntrl-exporter">
            <Image
              src={githubIcon}
              width={32}
              className="p-1"
              alt="Github icon"
            />
          </a>
        </div>
      </header>
      <div className="px-10 w-full">
        <main id="export" className="mt-10 w-full max-w-[480px] mx-auto ">
          <p>Export your cntrl.site as a .zip and host it anywhere.</p>
          <p className="mb-10 text-sm text-muted-foreground">
            (like on{" "}
            <Button variant="link" asChild className="inline  p-0">
              <a href="#ipfs">IPFS</a>
            </Button>
            )
          </p>
          <Exporter />
        </main>
      </div>
      <section className="w-full bg-gradient-to-b from-gray-100 to-[32px] to-transparent px-10 py-10 mt-20">
        <div className="max-w-[480px]  mx-auto">
          <h2 className="font-bold text-2xl mb-10 text-center">
            Exporting your site
          </h2>

          <ol className="flex flex-col gap-6 list-decimal list-inside">
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
                width={4800}
                alt="Opening account settings"
              />
            </li>
            <li>
              Enable &quot;Dev mode&quot;
              <Image
                src={devMode}
                width={4810}
                className="mt-2"
                alt="Enabling Dev mode"
              />
            </li>
            <li>
              Go to the Dev tab and copy your Api Url
              <Image
                src={apiUrl}
                width={4820}
                className="mt-2"
                alt="Copying api Url"
              />
            </li>
            <li>
              Paste your Api Url{" "}
              <Button variant="link" asChild className="inline text-base p-0">
                <a href="#export">above</a>
              </Button>{" "}
              and click &quot;Export&quot;. Don&apos;t worry, this is a
              read-only api used to fetch your page&apos;s content and we
              don&apos;t store it anywhere.
            </li>
            <li>
              Wait for the export, download and extract the zip file. Your
              exported site will be on the <strong>_static</strong> folder.
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full  border-gray-100 border-t px-10 py-10 mt-10">
        <div className="max-w-[480px]  mx-auto">
          <h2 id="ipfs" className="font-bold text-2xl mb-10">
            Uploading to IPFS
          </h2>

          <p>
            The Interplanetary File System (IPFS) is a decentralized file
            storage protocol.{" "}
            <Button variant={"link"} className="inline text-base p-0" asChild>
              <a
                href="https://developers.cloudflare.com/web3/ipfs-gateway/concepts/ipfs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
            </Button>
          </p>

          <ol className="flex flex-col gap-6 mt-10 list-decimal list-inside">
            <li>
              Go to{" "}
              <Button variant={"link"} className="inline text-base p-0" asChild>
                <a
                  href="https://pinme.eth.limo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pinme.eth.limo
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
              If you wish to set up the IPFS deployment with an{" "}
              <Button variant={"link"} className="inline text-base p-0" asChild>
                <a href="https://ens.domains/" target="_blank">
                  ENS domain
                </a>
              </Button>{" "}
              you own, connect your wallet, then click on &quot;Bind an Ethereum
              Domain&quot; and follow the instructions
            </li>
          </ol>
        </div>
      </section>

      <footer className="mt-20 flex flex-col gap-4 justify-center w-full items-center">
        <p>{2025} · made by volky</p>
        <a href="https://x.com/volkyeth" target="_blank">
          <Image
            src={volkyPfp}
            width={32}
            className="animate-squish origin-bottom"
            alt="Volky profile"
          />
        </a>
      </footer>
    </div>
  );
}
