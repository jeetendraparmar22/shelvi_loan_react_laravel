<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOC Status</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            width: 100%;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .tabs {
            display: flex;
            background: #2c3e50;
        }

        .tab {
            flex: 1;
            padding: 15px;
            text-align: center;
            color: white;
            cursor: pointer;
            transition: background 0.3s;
        }

        .tab:hover,
        .tab.active {
            background: #34495e;
        }

        .content {
            padding: 30px;
            text-align: center;
        }

        .status-box {
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        .verified {
            background: #e6ffed;
            color: #2e7d32;
        }

        .unverified {
            background: #ffebee;
            color: #c62828;
        }

        .status-box h2 {
            margin-bottom: 10px;
        }

        .status-box p {
            font-size: 16px;
        }

        .details {
            margin-top: 20px;
            text-align: left;
        }

        .details p {
            margin: 10px 0;
            color: #333;
        }

        @media (max-width: 600px) {
            .container {
                margin: 10px;
            }

            .tabs {
                flex-direction: column;
            }

            .tab {
                padding: 12px;
            }

            .content {
                padding: 20px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="tabs">
            <div class="tab active">Verify Status</div>
            <h2>NOC Unverified</h2>
        </div>



        <div class="content" id="unverify" style="display: none;">
            <div class="status-box unverified">
                <h2>NOC Unverified</h2>
                <p>Your NOC has been marked as unverified.</p>
            </div>

        </div>
    </div>


</body>

</html>
