async function postData(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  if (!res.ok) {
    throw new Error(`something went wrong ${res.status}`);
  }

  return await res;
}

export { postData };
