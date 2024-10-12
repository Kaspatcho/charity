<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notification>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        /**
         * 
         * $table->foreignIdFor(User::class)->constrained('users');
         * $table->text('message');
         * $table->boolean('is_read');
         */
        return [
            'user_id' => User::factory(),
            'message' => fake()->realText(),
            'is_read' => fake()->boolean(90)
        ];
    }
}
