import axios from "axios";
import {
  ApplicationMetaDataObject,
  OSSettings,
  Mkdir,
  Directory,
  Path,
} from "@thijmenos/common/types";
import { config } from "@thijmenos/common/config";

const api = axios.create({
  baseURL: config.host,
  timeout: 1000,
});

export async function ShowFilesInDir(
  path: string = ""
): Promise<Array<Directory>> {
  const { data } = await api.get(`/filesystem/showUserFiles?dir=${path}`);
  return data;
}

export async function OpenFile(path: string) {
  const { data } = await api.get(`/filesystem/openUserFile?file=${path}`);
  return data;
}

export async function FetchInstalledApplications(): Promise<
  Array<ApplicationMetaDataObject>
> {
  const { data } = await api.get(`/root/readRegisteredApplications`);
  return data;
}
export async function FetchSettings(): Promise<OSSettings> {
  const { data } = await api.get("/root/readSettings");
  return data;
}
export async function ChangeDirectory(path: Path): Promise<string> {
  const { data } = await api.get(`/root/changeDirectory?path=${path}`);
  return data;
}
export async function MakeDirectory(props: Mkdir): Promise<string> {
  const { data } = await api.post("/filesystem/makeDirectory", props);
  return data;
}
export async function CreateFile(props: string): Promise<string> {
  const { data } = await api.post("/filesystem/makeFIle", props);
  return data;
}
export async function RemoveDirectory(props: Path): Promise<string> {
  const { data } = await api.post("/filesystem/removeDirectory", {
    Path: props,
  });
  return data;
}

export async function ChangeBackground(props: string): Promise<string> {
  const { data } = await api.post("/settings/setBackground", {
    Path: props,
  });
  return data;
}
export async function GetBackground(): Promise<string> {
  const { data } = await api.get("/settings/getBackground");
  return data;
}
