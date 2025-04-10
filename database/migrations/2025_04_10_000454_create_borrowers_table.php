<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('borrowers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 191);
            $table->string('last_name', 191);
            $table->string('surname', 191);
            $table->string('email', 191)->nullable();
            $table->string('mobile_no', 191)->unique();
            $table->string('alternate_mobile_no', 191)->unique()->nullable();
            $table->string('adhar_card', 191)->nullable();
            $table->string('remark_customer_detail', 191)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('borrowers');
    }
};
