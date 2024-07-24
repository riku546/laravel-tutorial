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
    
    <x-nav-component />
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
