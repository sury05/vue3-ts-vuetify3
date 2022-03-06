import { whitelist } from "@/api/instance/index-instance";
import { AxiosPromise } from "axios";

function fetchAllWhitelist() {
  return whitelist.get("/");
}

function fetchWhitelist(host: string, port: string): AxiosPromise<AllowUrl[]> {
  return whitelist.get("/", {
    params: {
      host,
      port,
    },
  });
}

function saveWhitelist(url: AllowUrl) {
  return whitelist.post("/", url);
}

function deleteWhitelist(host: string, port: string) {
  return whitelist.delete("/", {
    params: {
      host,
      port,
    },
  });
}

interface AllowUrl {
  host: string;
  port: number;
  updated_at?: string;
}

export {
  fetchAllWhitelist,
  fetchWhitelist,
  saveWhitelist,
  deleteWhitelist,
  AllowUrl,
};
