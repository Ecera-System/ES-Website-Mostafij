import axios from "axios";

// <-- Stripe payment API -->
const stripePayApi = async (data) => {
    await axios.post(`${process.env.REACT_APP_API_V1_URL}/payment/create-checkout-session`, data)
        .then(res => {
            if (res.data?.url) {
                window.location = res.data?.url;
                return res.data;
            };
        })
        .catch(err => {
            return err;
        });
};


// <-- Razorpay payment API -->
const loadRazorpay = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false)
        };
        document.body.appendChild(script);
    });
};

const razorpayApi = async (data, setRazorpayRes) => {
    const load = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!load) return alert("Razorpay SDK failed to load. Are you online?");

    await axios.post(`${process.env.REACT_APP_API_V1_URL}/payment/razorpay-create-order`, {
        amount: data.amount,
        currency: data.currency,
    })
        .then(res => {
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                name: 'Ecera System',
                amount: res.data.amount,
                currency: res.data.currency,
                description: data.serviceName,
                image: '/Images/Nav_logo/ecera-logo.png',
                order_id: res.data.id,
                handler: async function (response) {
                    return setRazorpayRes({
                        ...response,
                        orderCreationId: res.data.id,
                        userName: data.userName,
                        userEmail: data.userEmail,
                        phoneNumber: data.phoneNumber,
                        serviceName: data.serviceName,
                        amount: res.data.amount,
                        currency: res.data.currency,
                        quantity: data.quantity,
                        source: data.source,
                        paymentMethod: data.paymentMethod,
                        path: data.path,
                        registrationId: data.registrationId,
                    })
                },
                prefill: {
                    name: data.userName,
                    email: data.userEmail,
                    contact: data.phoneNumber,
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        })
        .catch(err => {
            err.response.data.error.description && alert(err.response.data.error.description);
        });
}

export { stripePayApi, razorpayApi };