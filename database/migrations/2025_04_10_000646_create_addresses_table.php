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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('borrower_id');
            $table->string('address', 191);
            $table->string('country', 191)->nullable();
            $table->string('state', 191)->nullable();
            $table->string('city', 191)->nullable();
            $table->string('village', 191)->nullable();
            $table->integer('pincode')->nullable();
            $table->timestamps();
            $table->foreign('borrower_id')->references('id')->on('borrowers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
