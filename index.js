// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the div container
    var signupFormContainer = document.getElementById("signupFormContainer");

    // Create the form element
    var form = document.createElement("form");
    form.setAttribute("name", "intgrtnFormSignup");
    form.setAttribute("novalidate", "");
    form.classList.add("intgrtn-form-signup");
    var defaultCountryCode = "+373"; // Update with your default country code

    // Create and append the form inputs
    form.innerHTML = `
        <div class="intgrtn-input-holder intgrtn-input-holder-first-name">
            <input class="intgrtn-input" type="text" name="firstName" placeholder="First Name" value="" required="">
        </div>
        <div class="intgrtn-input-holder intgrtn-input-holder-last-name">
            <input class="intgrtn-input" type="text" name="lastName" placeholder="Last Name" value="" required="">
        </div>
        <div class="intgrtn-input-holder intgrtn-input-holder-email">
            <input class="intgrtn-input" type="email" name="email" placeholder="Email" value="" required="">
        </div>
        <div class="intgrtn-input-holder intgrtn-input-holder-password has-btn-generate-password" hidden="hidden">
            <div class="intgrtn-btn-generate-password-holder">
                <div class="intgrtn-input-group">
                    <input class="intgrtn-input" data-intgrtn-tooltip="Password should contain at least 1 lowercase, 1 uppercase and 1 number without special characters. (Example: 123Asd)." name="password" placeholder="Password" required="" type="text">
                    <div class="intgrtn-password-eye-icon intgrtn-visible"></div>
                </div>
                <button class="intgrtn-btn-generate-password" type="button">Generate</button>
            </div>
        </div>
        <div class="intgrtn-input-holder intgrtn-input-holder-phone intgrtn-valid">
            <div class="intgrtn-input-group">
                <div class="intgrtn-input intgrtn-area-flags-holder intgrtn-country-code-md">
                    <div class="intgrtn-selected-area" data-intgrtn-tooltip="Moldova">
                        <div class="intgrtn-flag-image intgrtn-flag-${defaultCountryCodeName.toLowerCase()}"></div>
                        <div class="intgrtn-phone-code">${defaultCountryCode}</div>
                    </div>
                    <div class="intgrtn-areas-dropdown">
                        <!-- Country options go here -->
                    </div>
                </div>
                <input class="intgrtn-input intgrtn-input-area-code intgrtn-input-area-code-flags" type="text" name="areaCode" placeholder="Area Code" value="${defaultCountryCode}" data-country-code="${defaultCountryCode}" required="">
                <input class="intgrtn-input intgrtn-input-phone intgrtn-valid" type="text" name="phone" size="1" placeholder="62112345" value="" required="">
            </div>
        </div>

        <div class="intgrtn-btn-submit-holder">
            <button class="intgrtn-btn-submit" type="submit">REGISTRE</button>
        </div>
        <div class="intgrtn-loader-holder">
            <div class="intgrtn-loader-text-holder">
                <div class="intgrtn-lds-dual-ring"></div>
                <div class="intgrtn-loader-text">Loading...</div>
            </div>
        </div>
    `;

    // Append the form to the container
    signupFormContainer.appendChild(form);

    // Add event listener to toggle dropdown visibility
    var dropdown = form.querySelector(".intgrtn-areas-dropdown");
    var areaFlagsHolder = form.querySelector(".intgrtn-input.intgrtn-area-flags-holder.intgrtn-country-code-md");
    var selectedArea = form.querySelector(".intgrtn-selected-area");
    var selectedFlagImage = selectedArea.querySelector(".intgrtn-flag-image");
    var selectedAreaCode = form.querySelector(".intgrtn-phone-code");

    areaFlagsHolder.addEventListener("click", function() {
        dropdown.classList.toggle("intgrtn-opened");
    });

    // Country data
    var countryData = {
        "Afghanistan": { code: "af", phoneCode: "93" },
        "Aland Islands": { code: "ax", phoneCode: "358" },
        "Albania": { code: "al", phoneCode: "355" },
        "Algeria": { code: "dz", phoneCode: "213" },
        "American Samoa": { code: "as", phoneCode: "1-684" },
        "Andorra": { code: "ad", phoneCode: "376" },
        "Angola": { code: "ao", phoneCode: "244" },
        "Anguilla": { code: "ai", phoneCode: "1-264" },
        "Antarctica": { code: "aq", phoneCode: "672" },
        "Antigua and Barbuda": { code: "ag", phoneCode: "1-268" },
        "Argentina": { code: "ar", phoneCode: "54" },
        "Armenia": { code: "am", phoneCode: "374" },
        "Aruba": { code: "aw", phoneCode: "297" },
        "Australia": { code: "au", phoneCode: "61" },
        "Austria": { code: "at", phoneCode: "43" },
        "Azerbaijan": { code: "az", phoneCode: "994" },
        "Bahamas": { code: "bs", phoneCode: "1-242" },
        "Bahrain": { code: "bh", phoneCode: "973" },
        "Bangladesh": { code: "bd", phoneCode: "880" },
        "Barbados": { code: "bb", phoneCode: "1-246" },
        "Belarus": { code: "by", phoneCode: "375" },
        "Belgium": { code: "be", phoneCode: "32" },
        "Belize": { code: "bz", phoneCode: "501" },
        "Benin": { code: "bj", phoneCode: "229" },
        "Bermuda": { code: "bm", phoneCode: "1-441" },
        "Bhutan": { code: "bt", phoneCode: "975" },
        "Bolivia": { code: "bo", phoneCode: "591" },
        "Bonaire, Saint Eustatius and Saba": { code: "bq", phoneCode: "599" },
        "Bosnia and Herzegovina": { code: "ba", phoneCode: "387" },
        "Botswana": { code: "bw", phoneCode: "267" },
        "Bouvet Island": { code: "bv", phoneCode: "47" },
        "Brazil": { code: "br", phoneCode: "55" },
        "British Indian Ocean Territory": { code: "io", phoneCode: "246" },
        "Brunei Darussalam": { code: "bn", phoneCode: "673" },
        "Bulgaria": { code: "bg", phoneCode: "359" },
        "Burkina Faso": { code: "bf", phoneCode: "226" },
        "Burundi": { code: "bi", phoneCode: "257" },
        "Cambodia": { code: "kh", phoneCode: "855" },
        "Cameroon": { code: "cm", phoneCode: "237" },
        "Canada": { code: "ca", phoneCode: "1" },
        "Cape Verde": { code: "cv", phoneCode: "238" },
        "Cayman Islands": { code: "ky", phoneCode: "1-345" },
        "Central African Republic": { code: "cf", phoneCode: "236" },
        "Chad": { code: "td", phoneCode: "235" },
        "Chile": { code: "cl", phoneCode: "56" },
        "China": { code: "cn", phoneCode: "86" },
        "Christmas Island": { code: "cx", phoneCode: "61" },
        "Cocos (Keeling) Islands": { code: "cc", phoneCode: "61" },
        "Colombia": { code: "co", phoneCode: "57" },
        "Comoros": { code: "km", phoneCode: "269" },
        "Congo": { code: "cg", phoneCode: "242" },
        "Congo, Democratic Republic": { code: "cd", phoneCode: "243" },
        "Cook Islands": { code: "ck", phoneCode: "682" },
        "Costa Rica": { code: "cr", phoneCode: "506" },
        "Cote d'Ivoire": { code: "ci", phoneCode: "225" },
        "Croatia": { code: "hr", phoneCode: "385" },
        "Cuba": { code: "cu", phoneCode: "53" },
        "Curacao": { code: "cw", phoneCode: "599" },
        "Cyprus": { code: "cy", phoneCode: "357" },
        "Czech Republic": { code: "cz", phoneCode: "420" },
        "Denmark": { code: "dk", phoneCode: "45" },
        "Djibouti": { code: "dj", phoneCode: "253" },
        "Dominica": { code: "dm", phoneCode: "1-767" },
        "Dominican Republic": { code: "do", phoneCode: "1-809" },
        "Ecuador": { code: "ec", phoneCode: "593" },
        "Egypt": { code: "eg", phoneCode: "20" },
        "El Salvador": { code: "sv", phoneCode: "503" },
        "Equatorial Guinea": { code: "gq", phoneCode: "240" },
        "Eritrea": { code: "er", phoneCode: "291" },
        "Estonia": { code: "ee", phoneCode: "372" },
        "Ethiopia": { code: "et", phoneCode: "251" },
        "Falkland Islands (Malvinas)": { code: "fk", phoneCode: "500" },
        "Faroe Islands": { code: "fo", phoneCode: "298" },
        "Fiji": { code: "fj", phoneCode: "679" },
        "Finland": { code: "fi", phoneCode: "358" },
        "France": { code: "fr", phoneCode: "33" },
        "French Guiana": { code: "gf", phoneCode: "594" },
        "French Polynesia": { code: "pf", phoneCode: "689" },
        "French Southern Territories": { code: "tf", phoneCode: "262" },
        "Gabon": { code: "ga", phoneCode: "241" },
        "Gambia": { code: "gm", phoneCode: "220" },
        "Georgia": { code: "ge", phoneCode: "995" },
        "Germany": { code: "de", phoneCode: "49" },
        "Ghana": { code: "gh", phoneCode: "233" },
        "Gibraltar": { code: "gi", phoneCode: "350" },
        "Greece": { code: "gr", phoneCode: "30" },
        "Greenland": { code: "gl", phoneCode: "299" },
        "Grenada": { code: "gd", phoneCode: "1-473" },
        "Guadeloupe": { code: "gp", phoneCode: "590" },
        "Guam": { code: "gu", phoneCode: "1-671" },
        "Guatemala": { code: "gt", phoneCode: "502" },
        "Guernsey": { code: "gg", phoneCode: "44-1481" },
        "Guinea": { code: "gn", phoneCode: "224" },
        "Guinea-Bissau": { code: "gw", phoneCode: "245" },
        "Guyana": { code: "gy", phoneCode: "592" },
        "Haiti": { code: "ht", phoneCode: "509" },
        "Heard Island and McDonald Islands": { code: "hm", phoneCode: "672" },
        "Holy See (Vatican City State)": { code: "va", phoneCode: "379" },
        "Honduras": { code: "hn", phoneCode: "504" },
        "Hong Kong": { code: "hk", phoneCode: "852" },
        "Hungary": { code: "hu", phoneCode: "36" },
        "Iceland": { code: "is", phoneCode: "354" },
        "India": { code: "in", phoneCode: "91" },
        "Indonesia": { code: "id", phoneCode: "62" },
        "Iran, Islamic Republic": { code: "ir", phoneCode: "98" },
        "Iraq": { code: "iq", phoneCode: "964" },
        "Ireland": { code: "ie", phoneCode: "353" },
        "Isle of Man": { code: "im", phoneCode: "44-1624" },
        "Israel": { code: "il", phoneCode: "972" },
        "Italy": { code: "it", phoneCode: "39" },
        "Jamaica": { code: "jm", phoneCode: "1-876" },
        "Japan": { code: "jp", phoneCode: "81" },
        "Jersey": { code: "je", phoneCode: "44-1534" },
        "Jordan": { code: "jo", phoneCode: "962" },
        "Kazakhstan": { code: "kz", phoneCode: "7" },
        "Kenya": { code: "ke", phoneCode: "254" },
        "Kiribati": { code: "ki", phoneCode: "686" },
        "Korea, Democratic People's Republic": { code: "kp", phoneCode: "850" },
        "Korea, Republic": { code: "kr", phoneCode: "82" },
        "Kuwait": { code: "kw", phoneCode: "965" },
        "Kyrgyzstan": { code: "kg", phoneCode: "996" },
        "Lao People's Democratic Republic": { code: "la", phoneCode: "856" },
        "Latvia": { code: "lv", phoneCode: "371" },
        "Lebanon": { code: "lb", phoneCode: "961" },
        "Lesotho": { code: "ls", phoneCode: "266" },
        "Liberia": { code: "lr", phoneCode: "231" },
        "Libya": { code: "ly", phoneCode: "218" },
        "Liechtenstein": { code: "li", phoneCode: "423" },
        "Lithuania": { code: "lt", phoneCode: "370" },
        "Luxembourg": { code: "lu", phoneCode: "352" },
        "Macao": { code: "mo", phoneCode: "853" },
        "Macedonia, the former Yugoslav Republic": { code: "mk", phoneCode: "389" },
        "Madagascar": { code: "mg", phoneCode: "261" },
        "Malawi": { code: "mw", phoneCode: "265" },
        "Malaysia": { code: "my", phoneCode: "60" },
        "Maldives": { code: "mv", phoneCode: "960" },
        "Mali": { code: "ml", phoneCode: "223" },
        "Malta": { code: "mt", phoneCode: "356" },
        "Marshall Islands": { code: "mh", phoneCode: "692" },
        "Martinique": { code: "mq", phoneCode: "596" },
        "Mauritania": { code: "mr", phoneCode: "222" },
        "Mauritius": { code: "mu", phoneCode: "230" },
        "Mayotte": { code: "yt", phoneCode: "262" },
        "Mexico": { code: "mx", phoneCode: "52" },
        "Micronesia, Federated States": { code: "fm", phoneCode: "691" },
        "Moldova, Republic": { code: "md", phoneCode: "373" },
        "Monaco": { code: "mc", phoneCode: "377" },
        "Mongolia": { code: "mn", phoneCode: "976" },
        "Montenegro": { code: "me", phoneCode: "382" },
        "Montserrat": { code: "ms", phoneCode: "1-664" },
        "Morocco": { code: "ma", phoneCode: "212" },
        "Mozambique": { code: "mz", phoneCode: "258" },
        "Myanmar": { code: "mm", phoneCode: "95" },
        "Namibia": { code: "na", phoneCode: "264" },
        "Nauru": { code: "nr", phoneCode: "674" },
        "Nepal": { code: "np", phoneCode: "977" },
        "Netherlands": { code: "nl", phoneCode: "31" },
        "New Caledonia": { code: "nc", phoneCode: "687" },
        "New Zealand": { code: "nz", phoneCode: "64" },
        "Nicaragua": { code: "ni", phoneCode: "505" },
        "Niger": { code: "ne", phoneCode: "227" },
        "Nigeria": { code: "ng", phoneCode: "234" },
        "Niue": { code: "nu", phoneCode: "683" },
        "Norfolk Island": { code: "nf", phoneCode: "672" },
        "Northern Mariana Islands": { code: "mp", phoneCode: "1-670" },
        "Norway": { code: "no", phoneCode: "47" },
        "Oman": { code: "om", phoneCode: "968" },
        "Pakistan": { code: "pk", phoneCode: "92" },
        "Palau": { code: "pw", phoneCode: "680" },
        "Palestine, State of": { code: "ps", phoneCode: "970" },
        "Panama": { code: "pa", phoneCode: "507" },
        "Papua New Guinea": { code: "pg", phoneCode: "675" },
        "Paraguay": { code: "py", phoneCode: "595" },
        "Peru": { code: "pe", phoneCode: "51" },
        "Philippines": { code: "ph", phoneCode: "63" },
        "Pitcairn": { code: "pn", phoneCode: "870" },
        "Poland": { code: "pl", phoneCode: "48" },
        "Portugal": { code: "pt", phoneCode: "351" },
        "Puerto Rico": { code: "pr", phoneCode: "1-787" },
        "Qatar": { code: "qa", phoneCode: "974" },
        "Reunion": { code: "re", phoneCode: "262" },
        "Romania": { code: "ro", phoneCode: "40" },
        "Russian Federation": { code: "ru", phoneCode: "7" },
        "Rwanda": { code: "rw", phoneCode: "250" },
        "Saint Barthelemy": { code: "bl", phoneCode: "590" },
        "Saint Helena, Ascension and Tristan da Cunha": { code: "sh", phoneCode: "290" },
        "Saint Kitts and Nevis": { code: "kn", phoneCode: "1-869" },
        "Saint Lucia": { code: "lc", phoneCode: "1-758" },
        "Saint Martin (French part)": { code: "mf", phoneCode: "590" },
        "Saint Pierre and Miquelon": { code: "pm", phoneCode: "508" },
        "Saint Vincent and the Grenadines": { code: "vc", phoneCode: "1-784" },
        "Samoa": { code: "ws", phoneCode: "685" },
        "San Marino": { code: "sm", phoneCode: "378" },
        "Sao Tome and Principe": { code: "st", phoneCode: "239" },
        "Saudi Arabia": { code: "sa", phoneCode: "966" },
        "Senegal": { code: "sn", phoneCode: "221" },
        "Serbia": { code: "rs", phoneCode: "381" },
        "Seychelles": { code: "sc", phoneCode: "248" },
        "Sierra Leone": { code: "sl", phoneCode: "232" },
        "Singapore": { code: "sg", phoneCode: "65" },
        "Sint Maarten (Dutch part)": { code: "sx", phoneCode: "1-721" },
        "Slovakia": { code: "sk", phoneCode: "421" },
        "Slovenia": { code: "si", phoneCode: "386" },
        "Solomon Islands": { code: "sb", phoneCode: "677" },
        "Somalia": { code: "so", phoneCode: "252" },
        "South Africa": { code: "za", phoneCode: "27" },
        "South Georgia and the South Sandwich Islands": { code: "gs", phoneCode: "500" },
        "South Sudan": { code: "ss", phoneCode: "211" },
        "Spain": { code: "es", phoneCode: "34" },
        "Sri Lanka": { code: "lk", phoneCode: "94" },
        "Sudan": { code: "sd", phoneCode: "249" },
        "Suriname": { code: "sr", phoneCode: "597" },
        "Svalbard and Jan Mayen": { code: "sj", phoneCode: "47" },
        "Swaziland": { code: "sz", phoneCode: "268" },
        "Sweden": { code: "se", phoneCode: "46" },
        "Switzerland": { code: "ch", phoneCode: "41" },
        "Syrian Arab Republic": { code: "sy", phoneCode: "963" },
        "Taiwan, Province of China": { code: "tw", phoneCode: "886" },
        "Tajikistan": { code: "tj", phoneCode: "992" },
        "Tanzania, United Republic": { code: "tz", phoneCode: "255" },
        "Thailand": { code: "th", phoneCode: "66" },
        "Timor-Leste": { code: "tl", phoneCode: "670" },
        "Togo": { code: "tg", phoneCode: "228" },
        "Tokelau": { code: "tk", phoneCode: "690" },
        "Tonga": { code: "to", phoneCode: "676" },
        "Trinidad and Tobago": { code: "tt", phoneCode: "1-868" },
        "Tunisia": { code: "tn", phoneCode: "216" },
        "Turkey": { code: "tr", phoneCode: "90" },
        "Turkmenistan": { code: "tm", phoneCode: "993" },
        "Turks and Caicos Islands": { code: "tc", phoneCode: "1-649" },
        "Tuvalu": { code: "tv", phoneCode: "688" },
        "Uganda": { code: "ug", phoneCode: "256" },
        "Ukraine": { code: "ua", phoneCode: "380" },
        "United Arab Emirates": { code: "ae", phoneCode: "971" },
        "United Kingdom": { code: "gb", phoneCode: "44" },
        "United States": { code: "us", phoneCode: "1" },
        "Uruguay": { code: "uy", phoneCode: "598" },
        "Uzbekistan": { code: "uz", phoneCode: "998" },
        "Vanuatu": { code: "vu", phoneCode: "678" },
        "Venezuela": { code: "ve", phoneCode: "58" },
        "Vietnam": { code: "vn", phoneCode: "84" },
        "Virgin Islands, British": { code: "vg", phoneCode: "1-284" },
        "Virgin Islands, U.S.": { code: "vi", phoneCode: "1-340" },
        "Wallis and Futuna": { code: "wf", phoneCode: "681" },
        "Western Sahara": { code: "eh", phoneCode: "212" },
        "Yemen": { code: "ye", phoneCode: "967" },
        "Zambia": { code: "zm", phoneCode: "260" },
        "Zimbabwe": { code: "zw", phoneCode: "263" }
    };
    

    // Generate country options
    var countryOptionsHTML = "";
    for (var countryName in countryData) {
        var country = countryData[countryName];
        countryOptionsHTML += `
            <div class="intgrtn-flag-single-item" data-country-name="${countryName}" data-country-code="${country.code}" data-phone-code="${country.phoneCode}">
                <div class="intgrtn-flag-image intgrtn-flag-${country.code}"></div>
                <div class="intgrtn-area-name">${countryName}</div>
                <div class="intgrtn-area-code"> +${country.phoneCode}</div>
            </div>
        `;
    }
    dropdown.innerHTML = countryOptionsHTML;

    var countryItems = dropdown.querySelectorAll(".intgrtn-flag-single-item");
    var countryPhone = dropdown.querySelectorAll(".intgrtn-flag-single-item");
    countryItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var countryName = item.dataset.countryName;
            var countryCode = item.dataset.phoneCode;
            var flagClass = item.querySelector(".intgrtn-flag-image").classList;
            selectedFlagImage.className = flagClass;
            selectedAreaCode.textContent = `+${countryCode}`;
            selectedArea.setAttribute("data-intgrtn-tooltip", countryName);
            console.log(countryCode);
        });
    });
});
