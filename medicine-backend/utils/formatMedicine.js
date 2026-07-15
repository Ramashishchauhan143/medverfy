function shorten(text, maxLength = 250) {
  if (!text) return "Not available";

  return text.length > maxLength
    ? text.substring(0, maxLength) + "..."
    : text;
}

function formatMedicine(medicine, events = [], recalls = []) {
  return {
    name:
      medicine.openfda?.brand_name?.[0] ||
      medicine.openfda?.generic_name?.[0] ||
      "Not available",

    genericName:
      medicine.openfda?.generic_name?.[0] ||
      "Not available",

    manufacturer:
      medicine.openfda?.manufacturer_name?.[0] ||
      "Not available",

    route:
      medicine.openfda?.route?.[0] ||
      "Not available",

    purpose: shorten(medicine.purpose?.[0]),

    indications: shorten(
      medicine.indications_and_usage?.[0]
    ),

    dosage: shorten(
      medicine.dosage_and_administration?.[0]
    ),

    warnings: shorten(
      medicine.warnings?.[0]
    ),

    sideEffects: shorten(
      medicine.adverse_reactions?.[0]
    ),

    recalls: recalls.map((item) => ({
      reason: shorten(
        item.reason_for_recall,
        120
      ),
      date:
        item.recall_initiation_date ||
        "Unknown",
    })),

    events: events.map((item) => ({
      reaction:
        item.patient?.reaction?.[0]
          ?.reactionmeddrapt ||
        "Unknown",

      serious:
        item.serious === 1
          ? "Yes"
          : "No",
    })),
  };
}

module.exports = formatMedicine;