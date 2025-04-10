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
}
