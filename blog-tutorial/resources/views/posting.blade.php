<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/posting.css">
    <link rel="stylesheet" href="/css/component/nav.css">
    <title>blog</title>
</head>
<body>

    <x-nav-component />

    <main class="container">
        <div class="card">
            <h1 class="text">blog</h1>
            <form action="{{route('postText')}}" method="post" class="form_inputs">
                @csrf
                <div class="name-area">
                    <label for="user_name" class="text">name</label>
                    <input type="text" name="user_name" class="name-input" id="user_name" placeholder="name">
                </div>
                <div class="text-area">
                    <label for="post_text" class="text">posting</label>
                    <textarea name="post_text" id="text-input" class="text-input" placeholder="text"></textarea>
                </div>
                <input type="submit" value="send" name="submit" class="send-button">
            </form>
        </div>
    </main>
</body>
</html>
