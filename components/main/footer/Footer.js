import dynamic from "next/dynamic";
import React from "react";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import AuthUi from "../AuthUi/AuthUi";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer-container bg-[#0a0a0a] p-5  text-white">
        <div className="grid-system grid gap-x-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
          <div className="grid1 my-10">
            <section className="broker-name text-3xl my-4">
              <svg
                width="179"
                height="40"
                viewBox="0 0 179 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M54 29.9225L66.0952 20.7815L77.0559 25.8481L94.3123 14.6047"
                  stroke="#0052FF"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M88 12L96.5172 12.6992L96 19"
                  stroke="#0052FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.688 31.752C6.104 31.752 4.848 31.616 3.92 31.344C2.992 31.072 2.304 30.688 1.856 30.192C1.408 29.712 1.112 29.144 0.968 28.488C0.84 27.816 0.776 27.096 0.776 26.328C0.776 25.048 0.808 23.584 0.872 21.936C0.952 20.288 1.048 18.52 1.16 16.632C1.288 14.728 1.424 12.76 1.568 10.728L5.936 11.16C5.776 12.392 5.632 13.656 5.504 14.952C5.392 16.232 5.296 17.48 5.216 18.696C5.136 19.912 5.072 21.016 5.024 22.008C4.976 23 4.936 23.832 4.904 24.504C4.888 25.16 4.88 25.584 4.88 25.776C4.88 26.336 4.944 26.76 5.072 27.048C5.2 27.32 5.456 27.504 5.84 27.6C6.224 27.696 6.784 27.744 7.52 27.744C8.448 27.744 9.496 27.688 10.664 27.576C11.832 27.448 13.016 27.264 14.216 27.024C15.416 26.784 16.512 26.496 17.504 26.16L18.44 30.288C17.352 30.56 16.176 30.808 14.912 31.032C13.664 31.256 12.416 31.432 11.168 31.56C9.92 31.688 8.76 31.752 7.688 31.752ZM20.0019 14.496C20.0019 14.352 19.9939 14.208 19.9779 14.064C19.9779 13.904 19.9779 13.728 19.9779 13.536C19.9779 13.024 19.9939 12.48 20.0259 11.904C20.0579 11.328 20.0899 10.84 20.1219 10.44L24.3939 10.512C24.3459 11.056 24.2899 11.672 24.2259 12.36C24.1779 13.048 24.1459 13.76 24.1299 14.496H20.0019ZM19.9059 31.68C19.8579 30.688 19.8259 29.632 19.8099 28.512C19.7939 27.376 19.7859 26.24 19.7859 25.104C19.7859 23.616 19.8019 22.168 19.8339 20.76C19.8659 19.352 19.9059 18.072 19.9539 16.92L24.0819 16.896C24.0179 17.632 23.9779 18.544 23.9619 19.632C23.9459 20.704 23.9379 21.832 23.9379 23.016C23.9379 24.184 23.9459 25.336 23.9619 26.472C23.9779 27.608 23.9939 28.64 24.0099 29.568C24.0419 30.48 24.0659 31.184 24.0819 31.68H19.9059ZM33.29 31.872C32.634 31.872 32.066 31.68 31.586 31.296C31.106 30.912 30.69 30.44 30.338 29.88C29.986 29.32 29.674 28.776 29.402 28.248C28.906 27.24 28.434 26.136 27.986 24.936C27.538 23.736 27.146 22.488 26.81 21.192C26.474 19.896 26.218 18.616 26.042 17.352L30.386 16.728C30.514 18.216 30.714 19.616 30.986 20.928C31.258 22.24 31.578 23.408 31.946 24.432C32.314 25.456 32.69 26.288 33.074 26.928C33.154 27.04 33.226 27.152 33.29 27.264C33.37 27.376 33.41 27.432 33.41 27.432C33.442 27.432 33.57 27.264 33.794 26.928C34.498 25.696 35.154 24.256 35.762 22.608C36.37 20.96 36.898 18.968 37.346 16.632L41.57 17.472C41.154 18.976 40.77 20.288 40.418 21.408C40.066 22.512 39.722 23.48 39.386 24.312C39.05 25.144 38.714 25.896 38.378 26.568C38.042 27.224 37.69 27.864 37.322 28.488C37.082 28.92 36.77 29.4 36.386 29.928C36.018 30.456 35.578 30.912 35.066 31.296C34.554 31.68 33.962 31.872 33.29 31.872ZM95.0979 31.896C93.8979 31.896 92.8099 31.584 91.8339 30.96C90.8579 30.352 90.0819 29.528 89.5059 28.488C88.9459 27.432 88.6659 26.256 88.6659 24.96C88.6659 23.744 88.8899 22.648 89.3379 21.672C89.7859 20.68 90.3939 19.832 91.1619 19.128C91.9459 18.424 92.8339 17.888 93.8259 17.52C94.8179 17.136 95.8579 16.944 96.9459 16.944C97.8579 16.944 98.7539 17.072 99.6339 17.328C99.6979 16.992 99.7539 16.656 99.8019 16.32L103.906 17.016C103.794 17.32 103.682 17.776 103.57 18.384C103.458 18.992 103.362 19.672 103.282 20.424C103.218 21.176 103.162 21.928 103.114 22.68C103.066 23.432 103.042 24.112 103.042 24.72C103.042 25.216 103.074 25.704 103.138 26.184C103.218 26.648 103.378 27.032 103.618 27.336C103.858 27.624 104.226 27.768 104.722 27.768H105.058L104.458 31.944C103.402 31.944 102.53 31.76 101.842 31.392C101.154 31.04 100.602 30.56 100.186 29.952C99.4979 30.72 98.7139 31.232 97.8339 31.488C96.9539 31.76 96.0419 31.896 95.0979 31.896ZM92.6019 25.44C92.6819 26.208 92.9939 26.824 93.5379 27.288C94.0979 27.736 94.8019 27.96 95.6499 27.96C96.4659 27.96 97.1459 27.744 97.6899 27.312C98.2339 26.864 98.6819 26.256 99.0339 25.488C99.0179 25.232 99.0099 24.968 99.0099 24.696C99.0099 24.136 99.0259 23.56 99.0579 22.968C99.0899 22.376 99.1299 21.792 99.1779 21.216C98.5059 20.96 97.8019 20.832 97.0659 20.832C96.2019 20.832 95.4259 21.008 94.7379 21.36C94.0659 21.696 93.5379 22.168 93.1539 22.776C92.7699 23.384 92.5779 24.088 92.5779 24.888C92.5779 24.984 92.5779 25.08 92.5779 25.176C92.5779 25.272 92.5859 25.36 92.6019 25.44ZM106.462 31.872C106.526 30.544 106.574 29.216 106.606 27.888C106.638 26.56 106.654 25.248 106.654 23.952C106.638 22.768 106.614 21.6 106.582 20.448C106.566 19.28 106.526 18.152 106.462 17.064L110.494 16.944C110.51 17.536 110.534 18.144 110.566 18.768C111.078 18.128 111.67 17.616 112.342 17.232C113.03 16.832 113.814 16.632 114.694 16.632C115.03 16.632 115.462 16.68 115.99 16.776C116.518 16.872 117.054 17.056 117.598 17.328L117.142 21.384C116.742 21.144 116.31 20.976 115.846 20.88C115.398 20.768 115.022 20.712 114.718 20.712C113.694 20.712 112.822 21.176 112.102 22.104C111.398 23.016 110.918 24.288 110.662 25.92C110.662 27.04 110.646 28.112 110.614 29.136C110.598 30.144 110.558 31.056 110.494 31.872H106.462ZM118.75 31.752C118.686 30.984 118.63 30 118.582 28.8C118.55 27.6 118.534 26.296 118.534 24.888C118.534 23.64 118.542 22.352 118.558 21.024C118.59 19.696 118.63 18.392 118.678 17.112C118.742 15.816 118.806 14.608 118.87 13.488C118.95 12.352 119.038 11.36 119.134 10.512L123.31 10.8C123.086 12.432 122.91 14.088 122.782 15.768C122.67 17.432 122.598 19.128 122.566 20.856C123.462 20.232 124.502 19.576 125.686 18.888C126.886 18.184 128.326 17.392 130.006 16.512L132.262 20.28C130.534 20.824 129.006 21.448 127.678 22.152C126.35 22.84 125.262 23.536 124.414 24.24C124.254 24.352 124.15 24.432 124.102 24.48C124.054 24.528 124.03 24.56 124.03 24.576C124.03 24.672 124.294 24.848 124.822 25.104C125.526 25.472 126.254 25.832 127.006 26.184C127.758 26.536 128.598 26.896 129.526 27.264C130.454 27.616 131.518 27.992 132.718 28.392L131.062 31.944C129.606 31.512 128.15 30.968 126.694 30.312C125.238 29.656 123.918 28.992 122.734 28.32C122.75 28.864 122.774 29.416 122.806 29.976C122.854 30.536 122.894 31.096 122.926 31.656L118.75 31.752ZM140.97 31.92C139.434 31.92 138.082 31.616 136.914 31.008C135.762 30.416 134.858 29.584 134.202 28.512C133.562 27.44 133.242 26.2 133.242 24.792C133.242 23.944 133.386 23.056 133.674 22.128C133.962 21.184 134.426 20.304 135.066 19.488C135.706 18.672 136.546 18.008 137.586 17.496C138.642 16.984 139.922 16.728 141.426 16.728C142.514 16.728 143.426 16.848 144.162 17.088C144.914 17.328 145.522 17.64 145.986 18.024C146.466 18.408 146.826 18.816 147.066 19.248C147.322 19.68 147.49 20.096 147.57 20.496C147.666 20.88 147.714 21.2 147.714 21.456C147.714 23.008 147.058 24.208 145.746 25.056C144.45 25.888 142.61 26.304 140.226 26.304C139.682 26.304 139.162 26.28 138.666 26.232C138.186 26.184 137.738 26.128 137.322 26.064C137.626 26.864 138.13 27.456 138.834 27.84C139.538 28.208 140.266 28.392 141.018 28.392C142.106 28.392 143.066 28.2 143.898 27.816C144.73 27.416 145.514 26.808 146.25 25.992L148.386 29.064C147.874 29.48 147.298 29.912 146.658 30.36C146.034 30.808 145.266 31.176 144.354 31.464C143.442 31.768 142.314 31.92 140.97 31.92ZM141.498 20.328C140.554 20.328 139.722 20.568 139.002 21.048C138.282 21.528 137.754 22.16 137.418 22.944C137.818 23.008 138.21 23.064 138.594 23.112C138.994 23.144 139.386 23.16 139.77 23.16C140.122 23.16 140.522 23.128 140.97 23.064C141.434 23 141.882 22.904 142.314 22.776C142.762 22.648 143.13 22.488 143.418 22.296C143.706 22.088 143.85 21.848 143.85 21.576C143.85 21.448 143.786 21.288 143.658 21.096C143.53 20.904 143.298 20.728 142.962 20.568C142.626 20.408 142.138 20.328 141.498 20.328ZM157.446 31.896C156.486 31.896 155.726 31.688 155.166 31.272C154.606 30.872 154.198 30.312 153.942 29.592C153.686 28.872 153.518 28.048 153.438 27.12C153.374 26.192 153.342 25.216 153.342 24.192C153.342 23.136 153.382 22.04 153.462 20.904C152.39 21.048 151.358 21.232 150.366 21.456L149.622 17.688C150.95 17.336 152.366 17.08 153.87 16.92C153.982 16.104 154.102 15.248 154.23 14.352C154.358 13.44 154.502 12.48 154.662 11.472L158.79 11.832C158.598 12.664 158.43 13.496 158.286 14.328C158.142 15.144 158.014 15.936 157.902 16.704C158.798 16.704 159.638 16.728 160.422 16.776C161.222 16.808 161.958 16.872 162.63 16.968L162.15 20.736C161.59 20.672 161.006 20.632 160.398 20.616C159.806 20.584 159.206 20.568 158.598 20.568C158.23 20.568 157.862 20.576 157.494 20.592C157.398 21.76 157.334 22.76 157.302 23.592C157.286 24.424 157.278 25.016 157.278 25.368C157.278 26.248 157.326 26.88 157.422 27.264C157.534 27.648 157.71 27.84 157.95 27.84C158.222 27.84 158.526 27.752 158.862 27.576C159.198 27.384 159.526 27.128 159.846 26.808C160.182 26.488 160.462 26.144 160.686 25.776L162.534 29.64C160.95 31.144 159.254 31.896 157.446 31.896ZM171.388 31.992C170.3 31.992 169.292 31.864 168.364 31.608C167.436 31.352 166.596 31.024 165.844 30.624C165.092 30.224 164.42 29.8 163.828 29.352L165.988 25.872C166.66 26.496 167.308 26.976 167.932 27.312C168.556 27.648 169.204 27.88 169.876 28.008C170.564 28.136 171.308 28.2 172.108 28.2C172.796 28.2 173.348 28.112 173.764 27.936C174.18 27.744 174.388 27.504 174.388 27.216C174.388 26.976 174.188 26.792 173.788 26.664C173.388 26.52 172.876 26.4 172.252 26.304C171.628 26.192 170.972 26.056 170.284 25.896C169.308 25.64 168.396 25.344 167.548 25.008C166.7 24.672 166.012 24.216 165.484 23.64C164.972 23.064 164.716 22.296 164.716 21.336C164.716 20.568 164.9 19.896 165.268 19.32C165.636 18.728 166.124 18.24 166.732 17.856C167.356 17.456 168.06 17.16 168.844 16.968C169.628 16.776 170.436 16.68 171.268 16.68C172.708 16.68 173.948 16.856 174.988 17.208C176.044 17.544 177.052 17.992 178.012 18.552L175.828 21.864C175.348 21.528 174.796 21.24 174.172 21C173.564 20.744 172.948 20.552 172.324 20.424C171.716 20.28 171.148 20.208 170.62 20.208C170.044 20.208 169.588 20.296 169.252 20.472C168.932 20.648 168.772 20.896 168.772 21.216C168.772 21.408 168.972 21.592 169.372 21.768C169.788 21.928 170.572 22.144 171.724 22.416C172.412 22.576 173.14 22.744 173.908 22.92C174.676 23.08 175.396 23.312 176.068 23.616C176.756 23.904 177.308 24.328 177.724 24.888C178.156 25.432 178.372 26.16 178.372 27.072C178.372 28.608 177.756 29.808 176.524 30.672C175.292 31.552 173.58 31.992 171.388 31.992Z"
                  fill={`white`}
                />
                <path
                  d="M50.7594 31.92C49.2234 31.92 47.8714 31.616 46.7034 31.008C45.5514 30.416 44.6474 29.584 43.9914 28.512C43.3514 27.44 43.0314 26.2 43.0314 24.792C43.0314 23.944 43.1754 23.056 43.4634 22.128C43.7514 21.184 44.2154 20.304 44.8554 19.488C45.4954 18.672 46.3354 18.008 47.3754 17.496C48.4314 16.984 49.7114 16.728 51.2154 16.728C52.3034 16.728 53.2154 16.848 53.9514 17.088C54.7034 17.328 55.3114 17.64 55.7754 18.024C56.2554 18.408 56.6154 18.816 56.8554 19.248C57.1114 19.68 57.2794 20.096 57.3594 20.496C57.4554 20.88 57.5034 21.2 57.5034 21.456C57.5034 23.008 56.8474 24.208 55.5354 25.056C54.2394 25.888 52.3994 26.304 50.0154 26.304C49.4714 26.304 48.9514 26.28 48.4554 26.232C47.9754 26.184 47.5274 26.128 47.1114 26.064C47.4154 26.864 47.9194 27.456 48.6234 27.84C49.3274 28.208 50.0554 28.392 50.8074 28.392C51.8954 28.392 52.8554 28.2 53.6874 27.816C54.5194 27.416 55.3034 26.808 56.0394 25.992L58.1754 29.064C57.6634 29.48 57.0874 29.912 56.4474 30.36C55.8234 30.808 55.0554 31.176 54.1434 31.464C53.2314 31.768 52.1034 31.92 50.7594 31.92ZM51.2874 20.328C50.3434 20.328 49.5114 20.568 48.7914 21.048C48.0714 21.528 47.5434 22.16 47.2074 22.944C47.6074 23.008 47.9994 23.064 48.3834 23.112C48.7834 23.144 49.1754 23.16 49.5594 23.16C49.9114 23.16 50.3114 23.128 50.7594 23.064C51.2234 23 51.6714 22.904 52.1034 22.776C52.5514 22.648 52.9194 22.488 53.2074 22.296C53.4954 22.088 53.6394 21.848 53.6394 21.576C53.6394 21.448 53.5754 21.288 53.4474 21.096C53.3194 20.904 53.0874 20.728 52.7514 20.568C52.4154 20.408 51.9274 20.328 51.2874 20.328ZM65.4952 31.752C65.4472 30.168 65.4232 28.648 65.4232 27.192C65.4232 24.568 65.5032 22.192 65.6632 20.064C65.8232 17.936 66.0552 16.128 66.3592 14.64C66.5032 13.952 66.7032 13.288 66.9592 12.648C67.2312 12.008 67.6072 11.488 68.0872 11.088C68.5832 10.672 69.2312 10.464 70.0312 10.464C70.8152 10.464 71.4792 10.672 72.0232 11.088C72.5672 11.488 73.0072 11.976 73.3432 12.552C73.6952 13.128 73.9512 13.68 74.1112 14.208C74.5272 15.456 74.8792 16.704 75.1672 17.952C75.4552 19.2 75.7112 20.392 75.9352 21.528C76.0952 20.696 76.2792 19.824 76.4872 18.912C76.6952 17.984 76.9032 17.112 77.1112 16.296C77.3192 15.464 77.5112 14.776 77.6872 14.232C78.5032 11.72 79.7592 10.464 81.4552 10.464C82.3992 10.464 83.1992 10.808 83.8552 11.496C84.5112 12.168 84.9912 13.144 85.2952 14.424C85.4392 15 85.5832 15.84 85.7272 16.944C85.8872 18.048 86.0312 19.36 86.1592 20.88C86.3032 22.384 86.4232 24.048 86.5192 25.872C86.6312 27.696 86.7192 29.632 86.7832 31.68L82.5592 31.584C82.5592 30.736 82.5352 29.752 82.4872 28.632C82.4552 27.512 82.3992 26.352 82.3192 25.152C82.2552 23.936 82.1752 22.752 82.0792 21.6C81.9992 20.448 81.9112 19.408 81.8152 18.48C81.7352 17.552 81.6552 16.816 81.5752 16.272C81.4952 15.712 81.4232 15.432 81.3592 15.432C81.3432 15.432 81.2552 15.72 81.0952 16.296C80.9512 16.856 80.7672 17.608 80.5432 18.552C80.3352 19.496 80.1032 20.536 79.8472 21.672C79.5912 22.808 79.3352 23.952 79.0792 25.104C78.8392 26.24 78.6232 27.296 78.4312 28.272C78.2392 29.232 78.0872 30.016 77.9752 30.624L74.2072 30.72C74.0152 29.824 73.7832 28.84 73.5112 27.768C73.2552 26.68 72.9832 25.576 72.6952 24.456C72.4232 23.32 72.1512 22.232 71.8792 21.192C71.6072 20.136 71.3512 19.192 71.1112 18.36C70.8872 17.528 70.7032 16.872 70.5592 16.392C70.4152 15.896 70.3272 15.648 70.2952 15.648C70.2312 15.648 70.1592 16 70.0792 16.704C70.0152 17.392 69.9512 18.328 69.8872 19.512C69.8232 20.696 69.7672 22.032 69.7192 23.52C69.6872 25.008 69.6712 26.544 69.6712 28.128C69.6712 28.88 69.6712 29.568 69.6712 30.192C69.6872 30.816 69.7032 31.328 69.7192 31.728L65.4952 31.752Z"
                  fill="#0052FF"
                />
              </svg>
            </section>
            <section className="broker-writeup text-sm text-white/60  ">
              Livemarkets is a financial investment company established by a
              group of professional traders and investors, who have fore seen
              the future of International Capital Market. The company has direct
              contracts with professional traders and miners around the world
              that guarantees the best services and ensures profits are made and
              remitted to investors daily.
            </section>
          </div>
          <div className="grid2 flex justify-center flex-col">
            <h2 className="text-xl my-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Useful Links</p>
              </div>
            </h2>
            <div className="links focus:outline-none  focus:bg-none grid-cols-2 grid text-white/60 mx-2 transition-all cursor-pointer">
              {[
                "Getting Started",
                "About Us",
                "partners",
                "features & benefits",
                "testimonials",
                "FAQ",
              ].map((items) => {
                return (
                  <div
                    className="flex hover:text-white items-center my-2"
                    key={items}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-2 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm capitalize">{items}</p>
                  </div>
                );
              })}
            </div>
            <Link href="/auth" passHref>
              <div className="flex items-center justify-center ">
                <div className="flex w-2/3 items-center justify-center md:w-full my-5 px-6 py-4 bg-[#0052FF] rounded-lg">
                  {" "}
                  <p className="text-sm text-white">Create account</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid3">
            <h2 className="text-xl my-9">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                    clipRule="evenodd"
                  />
                  <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
                </svg>

                <p>Contacts Information</p>
              </div>
            </h2>
            <div className="phone-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex  items-center justify-between">
              <section className="phone-section flex items-center ">
                <div className="icon p-3 rounded-full  mr-4 opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div className="phonenum text-sm">
                  <div className="phone  text-gray-200 font-bold">
                    Phone Contact
                  </div>
                  <div className="phone text-gray-400 my-1 text-sm">
                    +1 (555) - 6488
                  </div>
                </div>
              </section>
              <section className="icon-section"></section>
            </div>
            <div className="email-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex  items-center justify-between">
              <section className="email-section flex items-center ">
                <div className="icon p-3 rounded-full  mr-4 opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="emailadd text-sm">
                  <div className="email  text-gray-200 font-bold">
                    E-mail Contact
                  </div>
                  <div className="phone text-gray-400 my-1 text-sm">
                    team@thelivemarkets.net
                  </div>
                </div>
              </section>
              <section className="icon-section"></section>
            </div>
            <div className="address-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex  items-center justify-between">
              <section className="address-section flex items-center ">
                <div className="icon p-3 rounded-full  mr-4 opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                {/* <div className="addressadd text-sm">
                  <div className="address  text-gray-200 font-bold">
                    Office Address
                  </div>
                  <div className="phone text-gray-400 my-1 text-sm">
                    4240 Atwaters center, CA 20032, USA
                  </div>
                </div> */}
              </section>
              <section className="icon-section"></section>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-message py-4 flex justify-center text-white/60 bg-[#0a0a0a] text-xs md:text-base">
        © 2023 thelivemarkets.net All Rights Reserved.
      </div>
    </>
  );
}

//
//               <div>About Us</div>
//               <div>Partners</div>© 2023 Bittnovo.com All R
//               <div>Features & Benefits</div>
//               <div>Testimonials</div>
//               <div>FAQ</div>
