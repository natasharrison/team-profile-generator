function generateHtml(data) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./dist/style.css" />
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="m-5 row justify-content-around">
        <div class="col-3">
            <div class="card">
                <h3 class="card-header">${data.name}</h3>
                <br>
                <div class="card-body">
                    <div class ="role">${data.role}</div>
                    <p>ID: # ${data.id}</p>
                    <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                    <p>Office: # ${data.office}</p>
                    <p>GitHub: <a href="https://github.com/${data.github}">${data.github}</a></p>
                    <p>School: ${data.school} </p>
                </div>
            </div>
        </div>
    </main>
</body>
  `;
}

module.exports = generateHtml;