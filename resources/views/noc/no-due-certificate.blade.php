<!DOCTYPE html>
<html>

<head>
    <title>No Due Certificate</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            padding: 30px;
            line-height: 1.6;
        }

        .certificate {
            border: 4px double #333;
            padding: 40px;
            text-align: center;
            max-width: 700px;
            margin: auto;
            position: relative;
        }

        h2 {
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        .qr img {
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
        }

        .footer {
            margin-top: 40px;
            font-size: 14px;
        }

        @media print {
            .btn-print {
                display: none;
            }
        }
    </style>
</head>

<body>
    <div class="certificate">
        <h2>No Due Certificate</h2>
        <p>This is to certify that</p>
        <h3>{{ $loan_data->first_name }} {{ $loan_data->last_name }} {{ $loan_data->surname }}</h3>
        <p>has fully repaid the loan (Loan No: <strong>{{ $loan_data->id }}</strong>) for the vehicle:
            <strong>{{ $loan_data->vehicle->vehicle_registration_no }}</strong>.
        </p>
        <p>There are no outstanding dues as of <strong>{{ now()->format('d M Y') }}</strong>.</p>

        <div class="footer">
            <div class="qr">
                <img src="{{ $qrCodeDataUri }}" />
            </div>
            <p><strong>Issued on:</strong> {{ now()->toDayDateTimeString() }}</p>
            <p><strong>Authorized by:</strong> {{ config('app.name') }}</p>
        </div>
    </div>
</body>

</html>
