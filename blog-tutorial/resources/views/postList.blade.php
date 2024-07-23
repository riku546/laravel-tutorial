<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/postList.css">
    <title>Document</title>
</head>
<body>
    <nav>
        <div class="home-icon">
            <a href="{{route('PostList')}}">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#4165d2" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
            </a>
        </div>
        <div class="plus-icon">
        <a href="{{route('postPage')}}">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#4165d2" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
        </a>
        </div>
    </nav>
    <main>
        @foreach ($postLists as $postList)
            <div class="card w-50">
                <div class="card-body">
                <h5 class="card-title">{{$postList->user_name}}</h5>
                <p class="card-text">{{$postList->post_text}}</p>
                <div class="btn-date">
                    <div class="buttons">
                        <a href="" class="btn">delete</a>
                        <a href="" class="btn">edit</a>
                    </div>
                    <p>{{$postList->created_at}}</p>
                </div>
                </div>
            </div>
        @endforeach
    </main>
</body>
</html>
