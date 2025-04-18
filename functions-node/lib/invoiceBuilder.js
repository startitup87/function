const { v4: uuidv4 } = require('uuid');

module.exports = function buildInvoice(request, aiResult) {
      return {
            id: uuidv4(),
                from: request.userEmail,
                    to: request.clientEmail,
                        description: aiResult.serviceType,
                            urgency: aiResult.urgencyLevel,
                                notes: aiResult.specialNotes,
                                    price: aiResult.estimatedCost,
                                        status: 'pending',
                                            createdAt: new Date().toISOString()
      };
};
