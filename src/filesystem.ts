import api from "./api";
import { Mkdir, Directory, Path } from "@thijmenos/common/types";

export async function ShowFilesInDir(path = ""): Promise<Array<Directory>> {
  const { data } = await api.get(`/filesystem/showUserFiles?dir=${path}`);
  return data;
}

export async function OpenFile(path: string) {
  const { data } = await api.get(`/filesystem/openUserFile?file=${path}`);
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
