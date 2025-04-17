<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loan Foreclosure Letter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: #fff;
            width: 535px;
            /* A4 width (595px) - 30px left - 30px right */
            max-width: 100%;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin: 20px 30px;
            /* 30px left and right margin */
            box-sizing: border-box;
        }

        .header {
            text-align: center;
            border-bottom: 2px solid #007bff;
            padding-bottom: 15px;
            margin-bottom: 15px;
        }

        .header h1 {
            color: #007bff;
            margin: 8px 0;
            font-size: 22px;
        }

        .content {
            line-height: 1.5;
            color: #333;
            font-size: 14px;
        }

        .content p {
            margin: 8px 0;
        }

        .table-container {
            margin: 15px 0;
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

        .highlight {
            font-weight: bold;
            color: #d32f2f;
        }

        .footer {
            margin-top: 20px;
            text-align: center;
            color: #777;
            font-size: 12px;
        }

        .signature {
            margin-top: 30px;
            text-align: right;
        }

        .signature p {
            margin: 4px 0;
            font-size: 14px;
        }

        @media (max-width: 600px) {
            .container {
                padding: 15px;
                margin: 15px 30px;
                /* Maintain 30px margins */
                width: calc(100% - 60px);
                /* Adjust for margins */
            }

            .header h1 {
                font-size: 18px;
            }

            th,
            td {
                padding: 6px;
                font-size: 12px;
            }

            .content,
            .signature p {
                font-size: 12px;
            }
        }

        @media print {
            body {
                background: #fff;
                margin: 0;
                padding: 0;
            }

            .container {
                margin: 0 30px;
                /* 30px left and right margin for PDF */
                padding: 20px;
                box-shadow: none;
                width: 535px;
                /* Fit A4 page */
                min-height: 842px;
                /* A4 height for single page */
                box-sizing: border-box;
                page-break-after: avoid;
            }

            @page {
                size: A4;
                margin: 0;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Loan Foreclosure Letter</h1>
            <p>Shelvi Financial Services</p>
            <p>Sabarkantha, Gujarat,India</p>
        </div>
        <div class="content">
            <p><strong>Date:</strong> {{ date('d/m/Y') }}</p>
            <p><strong>To:</strong></p>
            <p>{{ $loan_data->first_name }} {{ $loan_data->last_name }}
                {{ $loan_data->surname }}<br>{{ $loan_data->address->address }}</p>
            <p><strong>Subject:</strong> Loan Foreclosure Statement</p>
            <p>Dear {{ $loan_data->first_name }},</p>
            <p>We have received your request to foreclose your loan account (Account Number: LN123456789) with Shelvi
                Financial Services. Below is the statement of your loan account as of {{ date('F d, Y') }}, detailing
                the
                amount required
                to fully close the loan:</p>
            <div class="table-container">
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Loan Amount</td>
                        <td>{{ $loan_data->loan->loan_amount }}-INR</td>
                    </tr>
                    <tr>
                        <td>Outstanding Amount</td>
                        <td>{{ $loan_data->loan->outstanding_principal_amount }}-INR</td>
                    </tr>
                    <tr>
                        <td>Foreclosure Charges (2.5% of Outstanding)</td>
                        <td>{{ $loan_data->loan->outstanding_principal_amount * 0.025 }}-INR
                        </td>
                    </tr>
                    <tr>
                        <td class="highlight">Total Amount Payable for Loan Closure</td>
                        <td class="highlight">
                            {{ $loan_data->loan->outstanding_principal_amount + $loan_data->loan->outstanding_principal_amount * 0.025 }}-INR
                        </td>
                    </tr>
                </table>
            </div>
            <p>To foreclose your loan, please remit the total amount of <span
                    class="highlight">{{ $loan_data->loan->outstanding_principal_amount + $loan_data->loan->outstanding_principal_amount * 0.025 }}-INR</span>
                by
                {{ \Carbon\Carbon::today()->addDays(7)->format('F d, Y') }}. Payments can be made via bank transfer,
                cheque, or cash deposit at branch.
            <div class="signature">
                <p>Sincerely,</p>
                <p>Jigar Suthar</p>
                <p>Shelvi Financial Services</p>
            </div>
        </div>
        <div class="footer">
            <p>Shelvi Financial Services| Himmatnagar,Sabarkantha, Gujarat,India</p>
            <p>Contact: +91-9898105656 | Email: support@shelvifinancial.in</p>
        </div>
    </div>
</body>

</html>
