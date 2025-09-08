export async function loadSQL(path: string): Promise<string> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load SQL file: ${response.statusText}`);
  }
  return await response.text();
}

