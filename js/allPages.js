
var favicons = [
    {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "images/apple-touch-icon.png",
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "images/favicon-32x32.png",
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "images/favicon-16x16.png",
    },
];

// Function to add a favicon
function addFavicon(data) {
    var link = document.createElement("link");
    link.rel = data.rel;
    link.sizes = data.sizes;
    link.href = data.href;
    if (data.type) link.type = data.type;
    document.getElementsByTagName("head")[0].appendChild(link);
}

// Add each favicon
for (var i = 0; i < favicons.length; i++) {
    addFavicon(favicons[i]);
}

const openIcon = document.querySelector("#open");
const closeIcon = document.querySelector("#close");

if (openIcon && closeIcon) {
    openIcon.addEventListener("click", function () {
        openIcon.style.display = "none";
        document.querySelector(".navbar").style.display = "block";
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", function () {
        closeIcon.style.display = "none";
        document.querySelector(".navbar").style.display = "none";
        openIcon.style.display = "block";
    });
}



