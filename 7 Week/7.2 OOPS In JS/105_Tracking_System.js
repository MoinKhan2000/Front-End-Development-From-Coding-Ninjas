function main() {
    //Create your constructor funtion with the name Shipment
    function Shipment(id, location, destination, status, resources) {
        this.id = id;
        this.location = location;
        this.destination = destination;
        this.status = status;
        this.resources = resources
    }

    //Add the updateStatusAndResources using the object prototype
    Shipment.prototype.updateStatusAndResources = function (status, resources) {
        this.status = status;
        this.resources = resources
    }


    //Add the assignResource methods through Object prototype
    Shipment.prototype.assignResource = function (...arguments) {
        this.resources.push(...arguments)
    }

    //Create the object literal with tthe name TrackingSystem
    const TrackingSystem = {
        shipments: [],
        updateStatus(id, status) {
            const shipment = this.shipments.find(shipment => shipment.id === id);
            if (shipment) {
                shipment.status = status;
            }
        },

        viewShipment(id) {
            const shipment = this.shipments.find(shipment => shipment.id === id);
            if (shipment) {
                const { id, status, resources, location, destination } = shipment;
                console.log(`Shipment ID: ${id}`);
                console.log(`Status: ${status}`);
                console.log(`Resources: ${resources.join(', ')}`);
                console.log(`Location: ${location}`);
                console.log(`Destination: ${destination}`);
            }
        }
    }
    return { Shipment, TrackingSystem };
    //do not modify any other code.
}