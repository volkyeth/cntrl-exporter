"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCallback, useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const Exporter = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | undefined>();
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleExport = useCallback(() => {
    if (exporting) return;

    setExporting(true);
    setError(undefined);

    fetch(`${process.env.NEXT_PUBLIC_EXPORTER_URL}/build`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ apiKey: apiUrl }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.text().then((text) => {
          throw new Error(text);
        });
      })
      .then((data) => {
        const { downloadUrl } = data;
        if (downloadUrl) {
          setDownloadUrl(downloadUrl);

          // Create a temporary link to trigger the download automatically
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", `cntrl-site-export.zip`); // Suggest a filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      })
      .finally(() => {
        setExporting(false);
      });
  }, [exporting, apiUrl]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="grid w-full items-center gap-2">
        <Label>Api url</Label>
        <Textarea
          value={apiUrl}
          className="w-full"
          onChange={(e) => setApiUrl(e.target.value)}
        />
      </div>
      {!downloadUrl && (
        <>
          <Button
            disabled={!apiUrl || exporting}
            onClick={handleExport}
            className="cursor-pointer"
          >
            {exporting ? "Exporting..." : "Export"}
            {exporting && (
              <LoaderCircleIcon className="animate-spin inline-block ml-1" />
            )}
          </Button>
          {exporting && (
            <p className="text-sm text-muted-foreground">
              This should take about 2 minutes.
            </p>
          )}
          {error && <p className="text-sm text-red-500">{error}</p>}
        </>
      )}
      {downloadUrl && (
        <div className="flex flex-col gap-2">
          <Button asChild>
            <a href={downloadUrl} download={"cntrl-site-export.zip"}>
              Download
            </a>
          </Button>
          <Button
            variant={"ghost"}
            className="cursor-pointer"
            onClick={() => setDownloadUrl(undefined)}
          >
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};
