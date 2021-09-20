<?php
require_once "../api_define.php";

$api_query = http_build_query($_GET);
$api_url = "https://content-youtube.googleapis.com/youtube/v3/videos?" . $api_query . "&key=" . API_KEY;
$curl = curl_init($api_url);
curl_setopt($curl, CURLOPT_URL, $api_url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
    "accept: */*",
    "accept-encoding: gzip",
    "accept-language: ja,en-US;q=0.9,en;q=0.8",
    'sec-ch-ua: "Chromium";v="93", " Not;A Brand";v="99"',
    "sec-ch-ua-mobile: ?0",
    'sec-ch-ua-platform: "Windows"',
    "sec-fetch-dest: empty",
    "sec-fetch-mode: cors",
    "sec-fetch-site: same-origin",
    "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.83 Safari/537.36",
    "x-clientdetails: appVersion=5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F93.0.4577.83%20Safari%2F537.36&platform=Win32&userAgent=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F93.0.4577.83%20Safari%2F537.36",
    "x-goog-encode-response-if-executable: base64",
    "x-javascript-user-agent: apix/3.0.0 google-api-javascript-client/1.1.0",
    "x-origin: https://explorer.apis.google.com",
    "x-referer: https://explorer.apis.google.com",
    "x-requested-with: XMLHttpRequest",
);

curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$response = gzdecode(curl_exec($curl));
$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

http_response_code($httpcode);
header("Content-Type: application/json");
echo $response;
?>