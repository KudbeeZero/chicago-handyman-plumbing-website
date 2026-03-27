import Time "mo:core/Time";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Int "mo:core/Int";

import MixinStorage "blob-storage/Mixin";


actor {
  include MixinStorage();

  type Lead = {
    name : Text;
    phone : Text;
    email : ?Text;
    zip : ?Text;
    serviceNeeded : Text;
    details : Text;
    timestamp : Time.Time;
    requestType : Text;
  };

  module Lead {
    public func compare(lead1 : Lead, lead2 : Lead) : Order.Order {
      Int.compare(lead2.timestamp, lead1.timestamp);
    };
  };

  let leads = Map.empty<Text, Lead>();
  var leadCounter = 0;

  public shared ({ caller }) func submitLead(name : Text, phone : Text, email : ?Text, zip : ?Text, serviceNeeded : Text, details : Text, requestType : Text) : async () {
    let lead : Lead = {
      name;
      phone;
      email;
      zip;
      serviceNeeded;
      details;
      timestamp = Time.now();
      requestType;
    };

    let leadId = leadCounter.toText();
    leads.add(leadId, lead);
    leadCounter += 1;
  };

  public query ({ caller }) func getLeads() : async [Lead] {
    leads.values().toArray().sort();
  };

  public query ({ caller }) func getLeadById(id : Text) : async Lead {
    switch (leads.get(id)) {
      case (null) { Runtime.trap("Lead not found") };
      case (?lead) { lead };
    };
  };
};
