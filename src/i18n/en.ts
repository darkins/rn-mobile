import {
    WelcomeScreen,
    DashboardScreen,
    ShareScreen,
    UrgentNeedsScreen,
    AdditionalDetailsScreen,
    RecordVideoScreen,
    HouseholdInformationScreen,
    RecoveryResourcesScreen,
    SubmissionScreen,
    PhoneRegisterScreen,
    InputPinScreen,
    CreatePinScreen,
    PersonDetailScreen,
    VerifyAddressScreen,
    VerifyEmailAddressScreen,
    RegistrationEndScreen,
    WalletDasboardScreen,
    WalletTransactionDetailScreen,
    WalletTransactionsScreen,
    WalletAddBankAccountScreen,
    WalletBalanceScreen,
    WalletGetCardScreen,
    WalletExtraOptionsScreen,
    ScanQRCodeScreen,
    StoreTransactionScreen,
    LoginScreen,
    YourSupportScreen,
    SupportApplicationScreen,
    CommonTerms,
} from './keys';

const english = {
    [WelcomeScreen.Title]: 'Transparency Engine 3.0',
    [WelcomeScreen.Introduction]: 'Help when you need it most.',
    [WelcomeScreen.Body]: 'We help you receive support during and after the disaster to nurture your recovery.',
    [WelcomeScreen.Login]: 'Login',
    [WelcomeScreen.Register]: 'Register',
    [WelcomeScreen.Espanol]: 'Español',
    [DashboardScreen.Your]: 'Your applications',
    [DashboardScreen.Near]: 'Assistence near you',
    [DashboardScreen.Available]: 'Available',
    [DashboardScreen.Brian]: 'Hurricane Brian',
    [DashboardScreen.Active]: 'Active Incidents',
    [DashboardScreen.Wildfires]: 'Wildfires',
    [ShareScreen.Details]: 'My Details',
    [ShareScreen.EditDetails]: 'Edit Details',
    [ShareScreen.Profile]: 'Profile',
    [ShareScreen.EditProfile]: 'Edit Profile',
    [ShareScreen.Share]: 'Share Your Details',
    [ShareScreen.Name]: 'Name',
    [ShareScreen.Dob]: 'Date of Birth',
    [ShareScreen.Ssn]: 'Social security number',
    [ShareScreen.Email]: 'Email address',
    [ShareScreen.Phone]: 'Phone number',
    [ShareScreen.Disaster]: 'Disaster impacted address',
    [ShareScreen.Fema]: 'FEMA number',
    [UrgentNeedsScreen.What]: 'What are your most urgent needs?',
    [UrgentNeedsScreen.Item1]: 'Advocacy (benefits, FEMA, legal etc.)',
    [UrgentNeedsScreen.Item2]: 'Clothing',
    [UrgentNeedsScreen.Item3]: 'Children & Youth Service',
    [UrgentNeedsScreen.Item4]: 'Education / Job Training',
    [UrgentNeedsScreen.Item5]: 'Employment',
    [UrgentNeedsScreen.Item6]: 'Emotional / Spiritual Care',
    [UrgentNeedsScreen.Item7]: 'Food / Nutrition',
    [UrgentNeedsScreen.Item8]: 'Functional Needs / Support Services',
    [UrgentNeedsScreen.Item9]: 'Funeral Assistance',
    [UrgentNeedsScreen.Item10]: 'Household Goods (appliances/furniture)',
    [UrgentNeedsScreen.Item11]: 'Housing (temporary/furniture)',
    [UrgentNeedsScreen.Item12]: 'Medical Assistance',
    [UrgentNeedsScreen.Item13]: 'Missing Person Assistance',
    [UrgentNeedsScreen.Item14]: 'Mold Remediation',
    [UrgentNeedsScreen.Item15]: 'Muck Out / Gutting OUt',
    [UrgentNeedsScreen.Item16]: 'Pet Assistance',
    [UrgentNeedsScreen.Item17]: 'Repair / Rebuild Assistance',
    [UrgentNeedsScreen.Item18]: 'Transportation Assistance',
    [AdditionalDetailsScreen.Additional]: 'Additional details',
    [AdditionalDetailsScreen.Please]:
        'Please indicate below any additional information that could impact your ability to recover including non-disaster needs, long-term needs, and other types of assistance/support needed:',
    [RecordVideoScreen.Describe]: 'Please describe your current situation',
    [RecordVideoScreen.Record]:
        'Please record a short video and describe why do you need support, and what are your most urgent needs. ',
    [RecordVideoScreen.Skip]: 'Skip',
    [HouseholdInformationScreen.Household]: 'Household Information',
    [HouseholdInformationScreen.Humans]: 'List Human Household Members, Relationship & Age:',
    [HouseholdInformationScreen.Addmember]: 'Add a member',
    [HouseholdInformationScreen.Pets]: 'List Pets, including Species:',
    [HouseholdInformationScreen.Addpets]: 'Add a pet',
    [HouseholdInformationScreen.Income]: 'What is your annual household income?',
    [HouseholdInformationScreen.Any]: 'Are any household members? (Check all that apply below):',
    [HouseholdInformationScreen.Disabilities]: 'Person(s) with Disability',
    [HouseholdInformationScreen.Veteran]: 'Veteran',
    [HouseholdInformationScreen.Language]: 'Needing Language Assistance',
    [RecoveryResourcesScreen.Recovery]: 'Recovery Resources',
    [RecoveryResourcesScreen.Financial]:
        'Please be aware that your personal financial resources will be considered to aid in recovery. The priority in distributing limited aid will be to those who do not have the resources necessary for recovery.',
    [RecoveryResourcesScreen.Support]: 'Have you received assistance or support from any organizations?',
    [RecoveryResourcesScreen.Applied]: 'Have you applied for government assistance? (if applicable)',
    [RecoveryResourcesScreen.Insurance]: 'Do you have insurance? (Homeowner/Renter, Flood, Content, Automobile)',
    [RecoveryResourcesScreen.Yes]: 'Yes',
    [RecoveryResourcesScreen.No]: 'No',
    [SubmissionScreen.Thanks]: 'Thank you for your submission',
    [SubmissionScreen.Processing]: 'We are processing your request.',
    [PhoneRegisterScreen.Please]: 'Please Register',
    [PhoneRegisterScreen.Country]: 'Country',
    [PhoneRegisterScreen.Phone]: 'Phone number',
    [InputPinScreen.Title]: "We've just sent a text message to +1 2342343456",
    [InputPinScreen.DigitCode]: 'Enter the 6 digit code',
    [InputPinScreen.Footer]: 'Use 486-527 from the text message',
    [CreatePinScreen.Title]: 'Create a PIN code',
    [PersonDetailScreen.Title]: 'Please verify your personal details.',
    [PersonDetailScreen.Describer]: 'For the security reasons we need to make sure it’s really you.',
    [PersonDetailScreen.FirstName]: 'First name',
    [PersonDetailScreen.LastName]: 'Last name',
    [PersonDetailScreen.SocialNumber]: 'Last 4 digits of your Security Social Number',
    [PersonDetailScreen.Birth]: 'Date of Birth',
    [PersonDetailScreen.Fema]: 'Your FEMA number',
    [VerifyAddressScreen.Title]: 'What is your home address?',
    [VerifyAddressScreen.State]: 'State',
    [VerifyAddressScreen.City]: 'City/Town',
    [VerifyAddressScreen.Street]: 'Street Name and Number',
    [VerifyAddressScreen.PostalCode]: 'Postal code',
    [VerifyEmailAddressScreen.Title]: 'What is your email address?',
    [VerifyEmailAddressScreen.Email]: 'E-mail Address',
    [VerifyEmailAddressScreen.Erro]: 'E-mail is not valid',
    [VerifyEmailAddressScreen.Confirm]: 'confirm email address',
    [RegistrationEndScreen.Title]: 'Congratulations!',
    [RegistrationEndScreen.Describe]: 'Your acount has been created.',
    [RegistrationEndScreen.Done]: 'Done',
    [WalletDasboardScreen.Title]: 'Wallet',
    [WalletTransactionDetailScreen.Title]: 'Wallet',
    [WalletTransactionDetailScreen.Button]: 'Scan receipt',
    [WalletTransactionDetailScreen.TextStatus]: 'Status',
    [WalletTransactionDetailScreen.TextStatement]: 'Statement',
    [WalletTransactionDetailScreen.TextPaymentTo]: 'Payment To',
    [WalletTransactionDetailScreen.TextPhone]: 'Phone',
    [WalletTransactionDetailScreen.TextMoneySent]: 'Money Sent',
    [WalletTransactionDetailScreen.TextCategory]: 'Category',
    [WalletTransactionDetailScreen.TextNote]: 'Note',
    [WalletTransactionDetailScreen.TextAddNote]: 'Add a note',
    [WalletTransactionDetailScreen.TextGroceries]: 'Groceries',
    [WalletTransactionDetailScreen.TextWalmart]: 'Walmart',
    [WalletTransactionsScreen.Search]: 'Search',
    [WalletTransactionsScreen.Title]: 'Transaction',
    [WalletAddBankAccountScreen.GetCard]: 'Get Card',
    [WalletAddBankAccountScreen.Title]: 'Add your bank account.',
    [WalletAddBankAccountScreen.TextText]:
        'Add your current bank account details to withdraw funds from your Digital Wallet. Your bank account needs to be in your name.',
    [WalletAddBankAccountScreen.TextRoutingNumber]: 'Routing number',
    [WalletAddBankAccountScreen.TextRoutingNumberDigits]: '9 digits',
    [WalletAddBankAccountScreen.TextAccountNumber]: 'Account number',
    [WalletAddBankAccountScreen.TextAccountNumberDigits]: '12 digits',
    [WalletAddBankAccountScreen.TextPopUpTitle]: 'Your account is being verified.',
    [WalletAddBankAccountScreen.TextPopUpDescribe]: 'We’ll confirm when it’s been approved.',
    [WalletBalanceScreen.Title]: 'Your Balance',
    [WalletBalanceScreen.Send]: 'Send',
    [WalletBalanceScreen.Receive]: 'Receive',
    [WalletBalanceScreen.Transactions]: 'Transactions',
    [WalletBalanceScreen.SeeAll]: 'See All',
    [WalletBalanceScreen.SuggestedForYou]: 'Suggested for you',
    [WalletBalanceScreen.RequestPaymentCard]: 'Request payment card',
    [WalletBalanceScreen.Request]: 'Request',
    [WalletBalanceScreen.Bank]: 'Add your bank account',
    [WalletBalanceScreen.Dollars]: 'US Dollars',
    [WalletGetCardScreen.Title]: 'Instantly order new card.',
    [WalletGetCardScreen.GetCard]: 'Get Card',
    [WalletGetCardScreen.TextCardCreateSuccess]: 'Your card has been created.',
    [WalletGetCardScreen.TextDebitCard]: 'Debit card',
    [WalletGetCardScreen.TextDebitCardCreation]: 'New debit card will be sent to your home address.',
    [WalletGetCardScreen.TextOrder]: 'Order',
    [WalletGetCardScreen.TextStoreMessage]: 'Add it your ApplePay and use in any store.',
    [WalletGetCardScreen.TextVirtualDebit]: 'Virtual debit card',
    [WalletGetCardScreen.TextVirtualDebitCreation]: 'No wait, no hassle. Spend online or with ApplePay right away.',
    [WalletExtraOptionsScreen.TextReceive]: 'Receive',
    [WalletExtraOptionsScreen.TextWithdraw]: 'Withdraw',
    [WalletExtraOptionsScreen.TextTitle]: 'Title',
    [WalletExtraOptionsScreen.TextDescribe]: 'Describe',
    [ScanQRCodeScreen.Permission]: 'Requesting for camera permission',
    [ScanQRCodeScreen.NoAccess]: 'No access to camera',
    [ScanQRCodeScreen.PleaseScan]: 'Please scan QR code of the recipient',
    [ScanQRCodeScreen.Tap]: 'Tap to Scan Again',
    [StoreTransactionScreen.SendReceipt]: 'Send Receipt',
    [LoginScreen.errorLogin]: 'failed to login',
    [LoginScreen.userI18n]: 'User',
    [LoginScreen.passwordI18n]: 'Password',
    [YourSupportScreen.Approved]: 'Approved',
    [YourSupportScreen.YourSupport]: 'Your Support',
    [YourSupportScreen.Application]: 'Your application was approved on',
    [YourSupportScreen.At]: 'at',
    [YourSupportScreen.More]: 'If you require more support, please get in touch.Apply for Assistance',
    [YourSupportScreen.PleaseSee]: 'Please see available support below:',
    [SupportApplicationScreen.SupportApplication]: 'Support Application',
    [SupportApplicationScreen.Support]: 'This support will provide you with:',
    [SupportApplicationScreen.Assistance]: 'Apply for Assistance',
    [CommonTerms.Save]: 'Save',
    [CommonTerms.Next]: 'Next',
    [CommonTerms.Continue]: 'Continue',
    [CommonTerms.Send]: 'Send',
    [CommonTerms.Previous]: 'Previous Screen',
    [CommonTerms.Apply]: 'Apply',
    [CommonTerms.Chat]: 'Chat',
    [CommonTerms.Wallet]: 'Wallet',
    [CommonTerms.House]: 'House in box',
    [CommonTerms.Vouchers]: 'Vouchers for food and water',
    [CommonTerms.Immediate]: '$200 Immediate funding',
    [CommonTerms.Charity1]: 'St Vincent De Paul',
    [CommonTerms.Charity2]: 'Americares',
    [CommonTerms.Login]: 'Login',
    [CommonTerms.Password]: 'Password',
    [CommonTerms.AvailableCards]: 'Available Cards',
    [CommonTerms.AvailableVouchers]: 'Available Vouchers',
    [CommonTerms.SendPayment]: 'Send payment',
    [CommonTerms.Walmart]: 'Walmart',
    [CommonTerms.NoAccess]: 'No access to camera',
    [CommonTerms.Contacts]: 'Contacts',
    [CommonTerms.Add]: 'Add',
};

export default english;