<?php
    function get_country_by_ip($ip_address) {
        try {
            // $ip_address = gethostbyname("dns.google");
            $response = file_get_contents("http://ipinfo.io/{$ip_address}/json");
            $data = json_decode($response, true);
            if (isset($data['country'])) {
                return $data['country'];
            } else {
                return null;
            }
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
            return null;
        }
    }
    $ip_address = $_SERVER['SERVER_ADDR'];
    $country = get_country_by_ip($ip_address);
    if ($country) {
        echo "<script>var defaultCountryCodeName = '$country';</script>";
    } else {
        echo "<script>var defaultCountryCodeName = 'MD';</script>";
    }
    
?>
