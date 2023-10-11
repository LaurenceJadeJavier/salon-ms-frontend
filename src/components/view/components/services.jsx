import React, { useState, useEffect } from "react";
import axios from "axios";
import { Transition } from "@headlessui/react"; // Import Transition from Headless UI

function Services() {
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedService, setSelectedService] = useState({
    id: "",
    name: "",
    category: "Hair",
    price: "",
    image: null,
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // Confirmation dialog state

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://api.example.com/services");
        const data = response.data;
        setServices(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServices();
  }, []);

  const handleEditClick = (service) => {
    setSelectedService(service);
    setEditMode(true);
    setModalOpen(true);
  };

  const handleDeleteClick = (service) => {
    setDeleteConfirmation(service);
  };

  const confirmDelete = () => {
    const serviceToDelete = deleteConfirmation;
    if (serviceToDelete) {
      // Delete service and update state
      axios
        .delete(`https://api.example.com/services/${serviceToDelete.id}`)
        .then(() => {
          setServices((prevServices) =>
            prevServices.filter((service) => service.id !== serviceToDelete.id)
          );
          setDeleteConfirmation(null);
        })
        .catch((error) => {
          console.error("Error deleting service:", error);
        });
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditMode(false);
    setSelectedService({
      id: "",
      name: "",
      category: "Hair",
      price: "",
      image: null,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      // Update service data
      try {
        await axios.put(
          `https://api.example.com/services/${selectedService.id}`,
          selectedService
        );

        setServices((prevServices) =>
          prevServices.map((service) => {
            if (service.id === selectedService.id) {
              return { ...service, ...selectedService };
            }
            return service;
          })
        );
      } catch (error) {
        console.error("Error updating service data:", error);
      }
    } else {
      // Add new service
      const newService = {
        ...selectedService,
        id: services.length + 1,
      };

      try {
        const response = await axios.post(
          "https://api.example.com/services",
          newService
        );

        setServices((prevServices) => [...prevServices, response.data]);
      } catch (error) {
        console.error("Error adding service data:", error);
      }
    }

    handleModalClose();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Salon Service Management</h1>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => {
          setModalOpen(true);
          setEditMode(false);
          setSelectedService({
            id: "",
            name: "",
            category: "Hair",
            price: "",
            image: null,
          });
        }}
      >
        Add Service
      </button>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {services.map((service) => (
            <tr key={service.id}>
              <td className="px-6 py-4 whitespace-nowrap">{service.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{service.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">${service.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-blue-500 hover-bg-blue-600 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleEditClick(service)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover-bg-red-600 text-white font-bold py-1 px-2 ml-2 rounded"
                  onClick={() => handleDeleteClick(service)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <form onSubmit={handleFormSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={selectedService.name}
                      onChange={(e) =>
                        setSelectedService({
                          ...selectedService,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                      Category
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      type="text"
                      placeholder="Category"
                      value={selectedService.category}
                      onChange={(e) =>
                        setSelectedService({
                          ...selectedService,
                          category: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                      Price
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="price"
                      type="number"
                      placeholder="Price"
                      value={selectedService.price}
                      onChange={(e) =>
                        setSelectedService({
                          ...selectedService,
                          price: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                      Image
                    </label>
                    <input
                      className="mb-2"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setSelectedService({
                          ...selectedService,
                          image: e.target.files[0],
                        })
                      }
                    />
                    {selectedService.image && (
                      <img
                        src={URL.createObjectURL(selectedService.image)}
                        alt="Selected"
                        className="mb-2 max-w-full"
                      />
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation dialog */}
      <Transition show={deleteConfirmation !== null}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Transition.Child
            enter="transform transition-transform ease-in-out duration-300"
            enterFrom="translate-y-1/2 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transform transition-transform ease-in-out duration-300"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-1/2 opacity-0"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg font-semibold">
                Are you sure you want to delete this service?
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 mr-4 text-blue-500 hover:text-blue-600"
                  onClick={() => setDeleteConfirmation(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-red-500 hover:text-red-600"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
}

export default Services;
