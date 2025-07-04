<template>
    <svg
        class="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <clipPath id="blobClip">
                <path
                    d="M164.5,98.5Q154,147,98.5,163.5Q43,180,36,115Q29,50,98.5,36Q168,22,170,81Q172,140,164.5,98.5Z"
                />
            </clipPath>
        </defs>
        <image
            xlink:href="/public/images/me.webp"
            width="160"
            height="185"
            x="20"
            y="28"
            clip-path="url(#blobClip)"
            preserveAspectRatio="xMidYMid slice"
        />
    </svg>
</template>
