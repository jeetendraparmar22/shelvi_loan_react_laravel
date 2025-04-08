<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoanApplication extends Model
{
    //
    protected $table = 'customers';

    protected $guarded = [];

    public function emiSchedules()
    {
        return $this->hasMany(EmiSchedule::class);
    }
}
