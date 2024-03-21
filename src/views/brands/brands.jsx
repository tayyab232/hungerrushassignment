import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Accordion } from "react-bootstrap";

import { categoryList } from "../../system/constants/GlobalConstants";
import { brandsActions } from "../../redux/actions/brands.action/brands.action";
import SwitchComponent from "../../shared/components/switchComponent/switchComponent";
import { brandActionsConstants } from "../../system/constants/GlobalConstants";

const Brands = (props) => {
  const [brandsList, setBrandsList] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (data) => {
    if (data.action === brandActionsConstants.BRANDS) {
      props.updateBrand({ ...data.brand, active: !data.brand.active });
    } else {
      const updatedLocations = data.brand.locations.map((location) => {
        if (location.id === data.updatedBrand.id) {
          return {
            ...location,
            ...data.updatedBrand,
            active: !data.updatedBrand.active,
          };
        }
        return location;
      });

      const updatedObject = {
        ...data.brand,
        locations: updatedLocations,
      };

      props.updateBrand({ ...updatedObject });
    }
  };

  useEffect(() => {
    setBrandsList(props.brandsState.brandsList);
  }, [props.brandsState]);

  useEffect(() => {
    props.getBrands();
  }, []);

  return (
    <div className="">
      <div className="brand-banner">
        <div className="fs-4 mb-1"> Brands</div>
        <div className="font-size-12">Active brands using 360 survey </div>
      </div>
      <form
        action="#"
        noValidate
        className="ViewUserContent"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="fields-container d-flex  mt-3">
          <div className="field-width">
            <div class="field fieldSignup mb-3">
              <InputGroup className="rounded-1">
                <InputGroup.Text
                  type="submit"
                  id="basic-addon1"
                  className=" pointer"
                >
                  <i className="fa-solid fa-magnifying-glass  color-gray" />
                </InputGroup.Text>

                <Form.Control
                  className={` light-black    `}
                  {...register("search", {
                    minLength: 3,
                    pattern: {
                      value: /^[^\s]+(?:$|.*[^\s]+$)/,
                      message: "Enter valid letters",
                    },
                  })}
                  placeholder="Search"
                />
              </InputGroup>
            </div>{" "}
          </div>
          <div className="field-width ms-3">
            <div class="field fieldSignup mb-3">
              <InputGroup>
                <Form.Select
                  className={` light-black   ${
                    errors.userGroupName ? "error-border" : ""
                  }`}
                  {...register("category", {})}
                  aria-label="Default select example"
                >
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
            </div>
          </div>
        </div>
      </form>
      <div className="">
        <div className="w-100 rounded-3  nav-color">
          <div className="pt-2 pb-2 ps-3 pe-3 ">
            <div className="d-flex justify-content-between actions-heading  pb-2 pt-1  border-bottom  ">
              <div className="fs-5 ">BRAND</div>
              <div className="fs-5 ">ACTION</div>
            </div>
            <div className="accordion-container">
              <Accordion defaultActiveKey="0" flush>
                {brandsList?.map((brand, index) => (
                  <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>
                      <SwitchComponent
                        onChange={() =>
                          handleChange({
                            brand: brand,
                            action: brandActionsConstants.BRANDS,
                          })
                        }
                        checked={brand?.active}
                      />
                      <p>{brand?.brandname}</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body bg-grays mb-3 me-3 ms-3 mt-3 rounded-1">
                      {brand?.locations.map((brandSub) => (
                        <>
                          <div className="d-flex justify-content-between actions-heading  pb-2 pt-1  ">
                            <div className="fs-5 ">{brandSub?.brandname}</div>
                            <div className="fs-5 ">
                              <SwitchComponent
                                onChange={() =>
                                  handleChange({
                                    brand: brand,
                                    updatedBrand: brandSub,
                                    action: brandActionsConstants.BRANDS_SUB,
                                  })
                                }
                                checked={brandSub?.active}
                              />
                            </div>
                          </div>
                        </>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  brandsState: state.brandsReducer,
});
const mapDispatchToProps = (dispatch) => ({
  getBrands: () => dispatch(brandsActions.getBrands()),
  updateBrand: (data) => dispatch(brandsActions.updateBrands(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Brands);
