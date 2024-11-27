<template>
  <div class="w-full max-w-[781px] rounded-xl bg-zinc-100 p-4">
    <div class="mb-5">
      <p class="mb-5 text-4xl font-semibold text-[#201B17]">Donat</p>
      <p>
        Mutolaa loyihasini qo‘llab quvvatlang. Sizning hissangiz bizning bu
        xizmatni davom ettirishimizga va yanada ko'proq kitoblarni
        qo'shishimizga yordam beradi.
      </p>
    </div>
    <div>
      <form>
        <div class="grid grid-cols-2 gap-x-6 gap-y-5">
          <FormInput
            v-model="form.full_name"
            placeholder="Ismingizni kiriting"
            class="w-full"
            label="To‘liq ism"
            input-class="bg-white"
            required
            :invalid="errors.full_name"
          />
          <div>
            <p class="mb-[7px] text-sm font-medium text-dark-400">
              Hissa turi <span class="ml-1 text-red-500">*</span>
            </p>
            <div
              class="flex h-[46.5px] w-full items-center rounded-lg border border-transparent bg-white px-4 py-[10px]"
            >
              <label
                v-for="option in donationOptions"
                :key="option.value"
                class="flex cursor-pointer items-center gap-2"
              >
                <input
                  v-model="form.donation_type"
                  type="radio"
                  :value="option.value"
                  class="peer hidden"
                />
                <span
                  class="flex size-5 items-center justify-center rounded-full border-2 border-orange"
                >
                  <span
                    v-if="form.donation_type"
                    class="size-[10px] rounded-full bg-orange"
                  ></span>
                </span>
                <span
                  class="inline-block select-none text-sm font-medium text-dark-400"
                >
                  {{ option.label }}
                </span>
              </label>
            </div>
            <p v-if="errors.donation_type" class="mt-1 text-sm text-red-500">
              Hissa turini tanlang
            </p>
          </div>
          <div class="col-span-2">
            <FormInput
              v-model="form.total_amount"
              placeholder="0"
              type="number"
              class="w-full"
              label="Miqdor"
              input-class="bg-white col-span-2"
              required
              :invalid="errors.total_amount"
            >
              <template #suffix><p class="pr-3 font-medium">UZS</p></template>
            </FormInput>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  full_name: "",
  total_amount: null,
  provider: "",
  donation_type: null,
});

const errors = reactive({
  full_name: false,
  total_amount: false,
  provider: false,
  donation_type: false,
});

const donationOptions = [{ label: "Yagona hissa", value: 1 }];
</script>
