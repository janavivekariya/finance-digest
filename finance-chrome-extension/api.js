// api.js

async function query(data) {
    const response = await fetch(
      "https://keyflow-backend-62hevvkvea-uc.a.run.app/api",
      {
        headers: {
          'X-API-Key': 'kf-ad2cbe6ebea31bc78475b665817ab8faK143',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
  