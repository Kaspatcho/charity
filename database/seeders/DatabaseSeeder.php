<?php

namespace Database\Seeders;

use App\Models\Budget;
use App\Models\Category;
use App\Models\Notification;
use App\Models\Transaction;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {
        User::factory()->count(20)->create();
        User::factory()->create([
            'email' => 'test@example.com',
            'password' => '12345',
            'currency' => 'BRL',
        ]);

        User::query()->inRandomOrder()->each(function (User $user) {
            Category::factory()->count(random_int(1, 10))->create(['user_id' => $user->id]);
            Notification::factory()->count(random_int(1, 20))->create(['user_id' => $user->id]);
            Category::query()->where(['user_id' => $user->id])
                ->inRandomOrder()->each(function (Category $category) use ($user) {
                    Budget::factory()->create([
                        'user_id' => $user->id,
                        'category_id' => $category->id
                    ]);
                    Transaction::factory()->count(random_int(1, 5))->create([
                        'user_id' => $user->id, 'category_id' => $category->id
                    ]);
                });
        });
    }
}
