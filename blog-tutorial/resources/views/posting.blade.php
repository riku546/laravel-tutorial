<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/app.css">
    <title>blog</title>
</head>
<body>
    <main class="container">
        <div class="card">
            <h1 class="text">blog</h1>
            <form action="{{route('postText')}}" method="post" class="form_inputs">
                @csrf
                <label for="" class="text">name:<input type="text" name="name" class="name-input"></label>
                <label for="" class="text">posting:<input class="textarea" name="textarea"></label>
                <input type="submit" value="send" name="submit" class="send-button">
            </form>
        </div>
    </main>
</body>
</html>
