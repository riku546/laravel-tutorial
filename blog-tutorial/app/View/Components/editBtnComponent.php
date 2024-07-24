<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class editBtnComponent extends Component
{
    public string $routeName;
    public string $method;
    public object $postList;
    /**
     * Create a new component instance.
     */
    public function __construct(string $routeName, string $method, object $postList)
    {
        $this->routeName = $routeName;
        $this->method = $method;
        $this->postList = $postList;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View | Closure | string
    {
        return view('components.edit-btn-component');
    }
}
