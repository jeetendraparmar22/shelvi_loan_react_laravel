<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmiSchedule extends Model
{
    //
    protected $guarded = [];

    public function loan()
    {
        return $this->belongsTo(LoanApplication::class);
    }
}
