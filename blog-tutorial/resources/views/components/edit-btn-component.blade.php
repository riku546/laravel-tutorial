    <form action="{{route($routeName , ['id' => $postList->id])}}" method="POST">
        @csrf
        @method($method)
        <input type="submit" value="{{$slot}}" class="btn" >
    </form>
