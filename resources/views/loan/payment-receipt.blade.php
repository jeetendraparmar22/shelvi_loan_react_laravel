<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EMI Paid Receipt</title>
    <style>
        body {
            font-family: 'Rubik', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }

        .receipt-container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .header h1 {
            margin: 0;
            color: #007bff;
            font-size: 24px;
        }

        .header p {
            margin: 5px 0;
            color: #555;
        }

        .details,
        .emi-details {
            margin-bottom: 20px;
        }

        .details h2,
        .emi-details h2 {
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
        }

        .details p,
        .emi-details p {
            margin: 8px 0;
            font-size: 14px;
            color: #444;
        }

        .details p span,
        .emi-details p span {
            font-weight: bold;
            display: inline-block;
            width: 200px;
        }

        .table-container {
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
            font-size: 14px;
        }

        th {
            background-color: #007bff;
            color: #fff;
        }

        td {
            background-color: #f9f9f9;
        }

        .total {
            font-weight: bold;
            font-size: 16px;
            text-align: right;
            margin-top: 10px;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
            color: #777;
            font-size: 12px;
        }

        .footer p {
            margin: 5px 0;
        }

        @media print {
            body {
                background-color: #fff;
            }

            .receipt-container {
                border: none;
                box-shadow: none;
            }
        }
    </style>
</head>

<body>
    <div class="receipt-container">
        <div class="header">
            <h1>EMI Paid Receipt</h1>
            <p>Shelvi Financial Services</p>
            <p>Himmatnagar,Sabarkantha, Gujarat,India</p>
            <p>Email: contact@shelviloans.com | Phone: (123) 456-7890</p>
        </div>

        <div class="details">
            <h2>Customer Information</h2>
            <p><span>Customer Name:</span> {{ $borrower->first_name }} {{ $borrower->last_name }}
                {{ $borrower->surname }}</p>
            <p><span>Loan ID:</span> {{ $loan->id }}</p>
            <p><span>Address:</span> {{ $address->address }}</p>
            <p><span>Date of Payment:</span> {{ $emiSchedule->paid_date }}</p>
        </div>

        <div class="emi-details">
            <h2>EMI Payment Details</h2>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>EMI Number</th>
                            <th>Due Date</th>
                            <th>Amount Paid</th>
                            <th>Penalty</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>EMI-{{ $emiSchedule->month_number }}</td>
                            <td>{{ $emiSchedule->due_date }}</td>
                            <td>{{ $emiSchedule->emi_amount }}-INR</td>
                            <td>{{ $emiSchedule->penalty }}-INR</td>
                            <td>{{ $emiSchedule->status }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="total">
                    <p>Total Paid: {{ $emiSchedule->emi_amount + $emiSchedule->penalty }} -INR</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Thank you for your payment!</p>
            <p>This is a computer-generated receipt and does not require a signature.</p>
            <p>For queries, contact us at support@shelviloans.com</p>
        </div>
    </div>
</body>

</html>
