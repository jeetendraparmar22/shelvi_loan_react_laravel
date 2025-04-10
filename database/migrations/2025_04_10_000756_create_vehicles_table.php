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
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('borrower_id');
            $table->string('vehicle_type', 191)->nullable();
            $table->string('vehicle_registration_no', 191)->nullable();
            $table->integer('vehicle_registration_year')->nullable();
            $table->string('chasis_no', 191)->nullable();
            $table->string('engine_no', 191)->nullable();
            $table->string('fuel_type', 191)->nullable();
            $table->string('insurance_company_name', 191)->nullable();
            $table->string('rc_book', 191)->nullable();
            $table->string('insurance_file', 191)->nullable();
            $table->string('dealer_name', 191)->nullable();
            $table->timestamps();

            $table->foreign('borrower_id')->references('id')->on('borrowers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
