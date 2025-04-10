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
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('borrower_id');
            $table->unsignedBigInteger('vehicle_id')->nullable();
            $table->date('file_log_in_date')->nullable();
            $table->string('finance_name', 191)->nullable();
            $table->string('finance_address', 191)->nullable();
            $table->string('executive_name', 191)->nullable();
            $table->string('loan_amount', 191)->nullable();
            $table->string('emi', 191)->nullable();
            $table->string('loan_term', 191)->nullable();
            $table->string('interest_rate', 191)->nullable();
            $table->string('loan_surakhya_vimo', 191)->nullable();
            $table->string('iho', 191)->nullable();
            $table->string('file_charge', 191)->nullable();
            $table->string('road_side_assite', 191)->nullable();
            $table->string('rto_charge', 191)->nullable();
            $table->string('hold_for_insurance', 191)->nullable();
            $table->string('loan_status', 191)->nullable();
            $table->date('approved_date')->nullable();
            $table->string('pdd_approve', 191)->default('no')->comment('no for not approve in pdd,yes for approve in pdd');
            $table->string('pdd_document_url', 191)->default('');
            $table->integer('commission_status')->default(0)->comment('1 for paid and 0 for  unpaid');
            $table->string('final_total_amount', 191)->nullable();
            $table->string('remark_loan_detail', 191)->nullable();
            $table->string('commission', 191)->nullable();
            $table->integer('transfer_status')->default(0);
            $table->string('user_id', 191)->nullable();
            $table->timestamps();

            $table->foreign('borrower_id')->references('id')->on('borrowers')->onDelete('cascade');
            $table->foreign('vehicle_id')->references('id')->on('vehicles')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
