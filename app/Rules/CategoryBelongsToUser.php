<?php

namespace App\Rules;

use App\Models\Category;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CategoryBelongsToUser implements ValidationRule
{
    public function __construct(private int $user_id)
    {
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $category_id, Closure $fail) : void
    {
        $exists = Category::query()
            ->where('id', $category_id)
            ->where('user_id', $this->user_id)
            ->exists();

        if (! $exists)
            $fail(__('validation.exists'));
    }
}
