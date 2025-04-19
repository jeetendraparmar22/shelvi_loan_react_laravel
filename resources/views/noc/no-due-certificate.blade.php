<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>No Objection Certificate</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 5px;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: white;
            width: 100%;
            max-width: 800px;
            padding: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border: 1px solid #ddd;
        }

        .header {
            text-align: center;
            border-bottom: 2px solid #000;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }

        .header img.logo {
            max-width: 150px;
            height: auto;
            margin-bottom: 10px;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
            color: #003087;
        }

        .header p {
            margin: 5px 0;
            font-size: 14px;
            color: #555;
        }

        .content {
            font-size: 16px;
            line-height: 1.6;
            color: #333;
        }

        .content p {
            margin: 10px 0;
        }

        .content .serial-date {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .content .to-address {
            margin-bottom: 20px;
        }

        .content .vehicle-details {
            margin: 20px 0;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 4px solid #003087;
        }

        .qr-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        .qr-code {
            text-align: right;
        }

        .qr-code img {
            max-width: 100px;
            height: auto;
        }

        .qr-code p {
            font-size: 12px;
            color: #555;
            margin: 5px 0 0 0;
        }

        .footer {
            margin-top: 40px;
            border-top: 2px solid #000;
            padding-top: 20px;
            text-align: center;
        }

        .footer p {
            margin: 5px 0;
            font-size: 14px;
            color: #555;
        }

        .footer .signature {
            margin-top: 20px;
            font-style: italic;
        }

        @media print {
            body {
                background-color: white;
                padding: 0;
            }

            .container {
                box-shadow: none;
                border: none;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="file://{{ public_path('assets/images/logo.svg') }}" alt="Kogta Financial Logo" class="logo">
            <h1>SHELVI FINANCIAL SERVICES</h1>
            <p>NO OBJECTION CERTIFICATE</p>
            <p>(Issued to the Regional Transport Authority)</p>
        </div>
        <div class="content">
            <div class="serial-date">
                <p><strong>Serial No:</strong> {{ $loan_data->id }}</p>
                <p><strong>Date:</strong> {{ now()->format('d M Y') }}</p>
                <p><strong>Agreement No:</strong> -</p>
            </div>
            <div class="to-address">
                <p>To,The Regional Transport Officer</p>
            </div>
            <p>Subject: Vehicle Registration No. {{ $loan_data->vehicle->vehicle_registration_no }} bearing Engine No.
                {{ $loan_data->vehicle->engine_no }} and Chassis no.
                {{ $loan_data->vehicle->chasis_no }} registered in the name of Mr./Mrs. {{ $loan_data->first_name }}
                {{ $loan_data->last_name }} {{ $loan_data->surname }}
            </p>
            <div class="vehicle-details">
                <p>We have no objection in canceling the HP / Hypothecation / Lease endorsement in the Registration
                    Certificate of the vehicle bearing Registration No.
                    {{ $loan_data->vehicle->vehicle_registration_no }}.</p>
                <p>Form 35 in duplicate is enclosed herewith.</p>
                <p>This No Objection Certificate is valid only for 60 days from the date of Issue.</p>
            </div>
            <div class="qr-section">
                <p>Thanking you,</p>
                <div class="qr-code">
                    <img src="{{ $qrCodeDataUri }}" alt="QR Code for  Verification">
                </div>
            </div>
            <p>Yours faithfully,</p>
            <p class="signature">For SHELVI FINANCIAL SERVICES</p>
        </div>
        <div class="footer">
            <p>Shelvi Financial Services</p>
            {{-- <p>CIN: U67120RJ1996PLC011406</p> --}}
            <p>Registered office: Himmatnagar, Sabarkantha, Gujarat</p>
            <p>Mob:9898105656 | Email: customer@shelvifinancial.in</p>
        </div>
    </div>
</body>

</html>
