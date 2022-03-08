require "test_helper"

class Api::FoodsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @food = foods(:one)
  end

  test "should get index" do
    get api_foods_url, as: :json
    assert_response :success
  end

  test "should create food" do
    assert_difference("Food.count") do
      post api_foods_url, params: { food: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show food" do
    get api_food_url(@food), as: :json
    assert_response :success
  end

  test "should update food" do
    patch api_food_url(@food), params: { food: {  } }, as: :json
    assert_response :success
  end

  test "should destroy food" do
    assert_difference("Food.count", -1) do
      delete api_food_url(@food), as: :json
    end

    assert_response :no_content
  end
end
