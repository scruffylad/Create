function writeJS(){
var str='';
str+='<a href="http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&mode=0&preference=0&sellerid=claimthis">Add to Favorite Sellers<\/a>';
str+='<a href="http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&linkname=includenewsletter&sellerid=claimthis">Sign up to Newsletter<\/a>';
str+='<a href="http:\/\/feedback.ebay.com\/ws\/eBayISAPI.dll?ViewFeedback&userid=claimthis&ftab=FeedbackAsSeller&ssPageName=VIP:feedback:3:uk">View Feedback<\/a>';
str+='<a href="http:\/\/contact.ebay.com\/ws\/eBayISAPI.dll?ReturnUserEmail&requested=claimthis&redirect=0&iid=0">Ask Seller a Question<\/a> ';
str+='<a href="http:\/\/stores.ebay.com\/claimthis">Visit Seller\'s eBay Store<\/a>';

document.write(str);
}
writeJS();



