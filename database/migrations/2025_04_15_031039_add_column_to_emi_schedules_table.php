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
        Schema::table('emi_schedules', function (Blueprint $table) {
            //
            $table->decimal('penalty', 10, 2)->default(0)->after('emi_amount')->comment('Penalty amount for late payment');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('emi_schedules', function (Blueprint $table) {
            //
            $table->dropColumn('penalty');
        });
    }
};
