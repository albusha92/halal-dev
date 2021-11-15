import { TermState } from "./../../../schema/redux";
import { createSlice } from "@reduxjs/toolkit";
const initState: TermState = {
  terms: [
    {
      title: "Scope",
      content:
        "The following terms of use apply to the use of My Lidl and all legal relationships between the parties directly related to it.However, these terms of use do not apply to separate contractual relationships concluded with third parties as part of the offers; for example for the purchase of goods or services. Rather, only the specific terms and conditions of the respective offer are decisive for this (see B. for the services in question here below).",
    },
    {
      title: "Registration",
      content:
        "In order to use My Lidl, registration is required, in which the respective user is assigned a password for the My Lidl account created. The registration process is only complete when the user's email address provided in this context has been validated and the operator has finally confirmed the registration. The data provided by the user during the registration process must be correct in terms of content. Third party data may not be used. If this data changes subsequently, the user must notify the operator immediately. The access data are intended exclusively for use by the respective authorized user and are to be protected against third-party knowledge by taking appropriate precautions. If there are indications of improper use of the My Lidl account, the user must notify the operator immediately. The user is liable for the consequences of unauthorized third-party use insofar as he is responsible for this or the failure to prevent it.",
    },
    {
      title: "Scope of Services",
      content:
        "The object of My Lidl's service is the provision of a uniform single sign-on service for various offers from the Lidl Group. This essentially means that the My Lidl account that has been created can be used for all of the offers it contains without the need to separately register or re-enter detailed user data.",
    },
    {
      title: "Warranty / Liability",
      content:
        "The operator endeavors to provide My Lidl as permanently and trouble-free as possible. Due to technical conditions such as configuration changes, maintenance, device failure, etc. However, this cannot be completely guaranteed. In the event of a service failure, the operator will endeavor to restore the usability without any complaints as soon as possible. The operator is not responsible for any consequences resulting from a lack of (full) usability.",
    },
    {
      title: "Duration of Use",
      content:
        "Both the operator and the user can terminate the user relationship for My Lidl at any time without observing a deadline. As part of the administration of the My Lidl account, the deletion of the same can be initiated by the user at any time. Termination by the operator comes into consideration in particular if the user violates the provisions of these terms of use. Until such incidents have been resolved, the user data can initially be simply blocked.",
    },
    {
      title: "Data protection",
      content:
        "The processing of your personal data takes place in compliance with your legal position under data protection law. To carry out the service, it is necessary that the data you provide is forwarded to the provider of the offer used in each case in order to enable the latter to authenticate the user and to provide the services commissioned as part of the offer (e.g. dispatch and billing of ordered goods).",
    },
    {
      title: "Place of jurisdiction / applicable law",
      content:
        "For disagreements and disputes on the occasion of this contract, the law of the Federal Republic of Germany applies exclusively, excluding the UN sales law.The sole place of jurisdiction for use by merchants, legal entities under public law or special funds under public law is Stuttgart.",
    },
  ],
  conditions: [
    {
      title: "Scope",
      content:
        "The offers are aimed exclusively at end customers with a delivery address in Germany. For individual bulky goods, the possible delivery addresses and the delivery location may be limited; the limitation is shown on the product detail page. The customer must have reached the age of 18. The contract is concluded exclusively in German.",
    },
    {
      title: "Conclusion of the contract",
      content:
        "The following terms of use apply to the use of My Lidl and all legal relationships between the parties directly related to it.However, these terms of use do not apply to separate contractual relationships concluded with third parties as part of the offers; for example for the purchase of goods or services. Rather, only the specific terms and conditions of the respective offer are decisive for this (see B. for the services in question here below).",
    },
    {
      title: "Prices and shipping costs",
      content:
        "All prices include the applicable statutory value-added tax and are subject to a flat-rate shipping charge and plus any shipping surcharges specified for bulky items. The shipping surcharges can vary depending on the type of delivery and the nature of the item (e.g. shipping item). The prices at the time of the order apply.",
    },
    {
      title: "Delivery date",
      content:
        "Delivery takes place within the working days specified on the respective article detail page (Monday to Saturday, excluding public holidays) after the payment order has been placed with the transferring bank (in the case of prepayment) or after the conclusion of the contract (when using online payment methods, payment by credit card, Lidl Gift card, payment by SEPA direct debit or purchase on account) When ordering several goods, the latest delivery time information for the items in the shopping cart is decisive for the calculation. In the case of goods for which a separate date for the start of delivery is specified in individual cases, the delivery period begins with this date at the earliest.",
    },
    {
      title: "Payment",
      content:
        "In the case of payment in advance, the customer must transfer the full invoice amount to the seller's account within five calendar days of receipt of the order, specifying the intended use. The seller reserves the purchase item for a period of five calendar days.",
    },
    {
      title: "Retention of title",
      content:
        "The purchase item delivered to the customer remains the property of the seller until all purchase items delivered to the customer have been paid for in full.",
    },
    {
      title: "Scope",
      content:
        "The following terms of use apply to the use of My Lidl and all legal relationships between the parties directly related to it.However, these terms of use do not apply to separate contractual relationships concluded with third parties as part of the offers; for example for the purchase of goods or services. Rather, only the specific terms and conditions of the respective offer are decisive for this (see B. for the services in question here below).",
    },
    {
      title: "Right of Defects",
      content:
        "If guarantees are advertised, the details result from the guarantee conditions, which are made available in writing at the latest upon delivery. In the event of defects in the delivered object of purchase, the customer is entitled to the statutory rights under the warranty / liability for defects, regardless of any guarantee. The limitation period for statutory claims for defects is two years and begins with the date of delivery, ie receipt of the item by the buyer. The statutory warranty claims of the buyer are not restricted by a guarantee. However, the special provisions of § 8 apply to claims for damages by the customer.",
    },
    {
      title: "Limitation of Liability",
      content:
        "If guarantees are advertised, the details result from the guarantee conditions, which are made available in writing at the latest upon delivery. In the event of defects in the delivered object of purchase, the customer is entitled to the statutory rights under the warranty / liability for defects, regardless of any guarantee. The limitation period for statutory claims for defects is two years and begins with the date of delivery, ie receipt of the item by the buyer. The statutory warranty claims of the buyer are not restricted by a guarantee. However, the special provisions of § 8 apply to claims for damages by the customer.",
    },
    {
      title: "Cancellation policy",
      content:
        "Cancellation policy Right of cancellation You have the right to cancel this contract within 14 days without giving any reason. The cancellation period is 14 days from the day on which you or a third party named by you who is not the carrier took possession of the last goods. To exercise your right of withdrawal, you must inform us lidl.de Lidl Digital International GmbH & Co. KG Stiftsbergstrasse 1 74172 Neckarsulm Telephone: 0800 - 43 53 361 Fax: 0800 - 100 1550 E-Mail:ruecksendung@lidl-shop.de Consequences of withdrawal If you withdraw from this contract, we will have given you all the payments that we have received from you, including delivery costs (with the exception of the additional costs that result from choosing a different type of delivery than the cheapest standard delivery offered by us have), to be repaid immediately and at the latest within 14 days from the date on which we received notification of your cancellation of this contract. For this repayment, we will use the same means of payment that you used for the original transaction, unless something else was expressly agreed with you; In no case will you be charged any fees for this repayment.",
    },
    {
      title: "Exclusion of the right of withdrawal / premature expiry of the right of withdrawal",
      content:
        "If guarantees are advertised, the details result from the guarantee conditions, which are made available in writing at the latest upon delivery. In the event of defects in the delivered object of purchase, the customer is entitled to the statutory rights under the warranty / liability for defects, regardless of any guarantee. The limitation period for statutory claims for defects is two years and begins with the date of delivery, ie receipt of the item by the buyer. The statutory warranty claims of the buyer are not restricted by a guarantee. However, the special provisions of § 8 apply to claims for damages by the customer.",
    },
    {
      title: "Voluntary right of return",
      content:
        "In addition to the statutory right of withdrawal of 14 days, we grant a voluntary right of return for a further 76 days. You can return the goods purchased from us to us for a total of 90 days after receipt.",
    },
    {
      title: "Place of jurisdiction / applicable law",
      content:
        "For disagreements and disputes on the occasion of this contract, the law of the Federal Republic of Germany applies exclusively, excluding the UN sales law The sole place of jurisdiction for orders from merchants, legal entities under public law or special funds under public law is Stuttgart.",
    },
    {
      title: "Consumer information on the disposal of old electrical appliances, rechargeable batteries and batteries",
      content:
        "Old electrical devices are to be separated from the rest of the waste and old batteries and accumulators that are not permanently installed with the old device are to be separated before delivery. Batteries and accumulators must not be disposed of with household waste. You are legally obliged to return used batteries and accumulators. After use, you can return the batteries free of charge either to our dispatch warehouse (Lidl Digital International GmbH & Co. KG, Uferring 2, 14974 Ludwigsfelde) or to locations in your immediate vicinity (e.g. in retail or at municipal collection points).",
    },
	{
		title: "Information on online dispute resolution and participation in an arbitration procedure",
		content:
		  "From February 15, 2016, the EU Commission will provide a platform for out-of-court dispute resolution. This gives consumers the opportunity to initially resolve disputes in connection with their online order without the intervention of a court. The dispute settlement platform is under the external linkhttp://ec.europa.eu/consumers/odr/reachable.",
	  },
  ],
};

const termSlice = createSlice({
  initialState: initState,
  name: "term",
  reducers: {},
});

export const termReducer = termSlice.reducer;
