const API_URL = import.meta.env.VITE_API_URL;

async function getJson(path){
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok){
    throw new Error(`HTTP status: ${res.status}`);
  }

  return res.json();
}

function getSettings(){
  return getJson('/api/settings');
}

function getPage(path){
  return getJson(`/api/pages/?path=${encodeURIComponent(path)}`);
}