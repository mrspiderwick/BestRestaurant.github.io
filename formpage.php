<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link class="intgrtn-asset" rel="stylesheet" type="text/css" href="https://trkmymedia.com/api/v1/integration/sdk.css?v=2.66.5">
</head>

<body>

    <?php
    $userIP = $_SERVER['REMOTE_ADDR'];

    $response = file_get_contents("https://ipinfo.io/{$userIP}/json");

    $data = json_decode($response, true);
 
    if (isset($data['country'])) {
        $defaultCountryCode = $data['country'];
    } else {
        $defaultCountryCode = "MD";
    }
    echo "<script>var defaultCountryCodeName = '$defaultCountryCode';</script>";
    ?>

    <div id="signupFormContainer" data-intgrtn-form-signup="" data-intgrtn-button-submit-text="REGISTRE"></div>

    <script src="index.js"></script>

</body>
</html>