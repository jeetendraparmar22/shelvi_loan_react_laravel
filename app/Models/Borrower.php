<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Borrower extends Model
{
    //
    protected $guarded = [];

    public function address()
    {
        return $this->hasOne(Address::class);
    }

    public function vehicle()
    {
        return $this->hasOne(Vehicle::class);
    }

    public function bankDetail()
    {
        return $this->hasOne(BankDetail::class);
    }

    public function loan()
    {
        return $this->hasOne(Loan::class);
    }
}
